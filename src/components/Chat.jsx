"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SingleChat from "./SingleChat";
import {
  useAddMessageMutation,
  useGetAllMessageQuery,
} from "@/app/apis/_index.chat.api";
import useUserStore from "@/store/user-store";
import { pusherClient } from "../hooks/pusher";

const Chat = ({ allChats }) => {
  const [addMessage, { error }] = useAddMessageMutation();
  const currentUser = useUserStore((state) => state.user);
  const [chatbox, setChatbox] = useState(null);
  const { data, refetch } = useGetAllMessageQuery(chatbox?.id, {
    skip: !chatbox?.id,
  });

  const handleAddMessage = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const text = formdata.get("text");
    const res = await addMessage({ text, chatId: chatbox?.id });
    e.target.reset();
  };
  useEffect(() => {
    if (!chatbox) return;
    const channel = pusherClient.subscribe(`listen-message`);
    channel.bind("update-message", (newMessage) => {
      if (newMessage.chatId === chatbox.id) {
        refetch();
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [data, chatbox?.id]);

  return (
    <div>
      <div className="bg-fuchsia-50 grid    h-full ">
        {/* messages */}
        <div className="xl:p-5 lg:p-2  ">
          <h1 className="text-2xl font-light">Messages</h1>
          <div className="flex flex-col gap-4 mt-2">
            {allChats?.map((chat, idx) => (
              <SingleChat chat={chat} key={idx} setChatbox={setChatbox} />
            ))}
          </div>
        </div>
        {/* chat box */}
        {chatbox !== null && (
          <div className="p-2  ">
            <div className="flex justify-between items-center bg-fuchsia-200  px-6 py-3 ">
              <div className="flex items-center gap-5">
                <div className=" relative w-[40px] h-[40px] ">
                  <Image
                    className="rounded-full object-cover"
                    src={
                      chatbox?.otherUser?.avatar ||
                      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    fill
                    alt=""
                  />
                </div>
                <p className="font-semibold capitalize">
                  {chatbox?.otherUserDetails?.username}{" "}
                </p>
              </div>
              <p
                onClick={() => setChatbox(null)}
                className="font-semibold text-2xl cursor-pointer"
              >
                X
              </p>
            </div>
            <div className="h-[200px] flex flex-col gap-5  overflow-y-scroll no-scrollbar1 ">
              {data?.map((mes) => (
                <div
                  key={mes.id}
                  style={{
                    alignSelf:
                      mes.userId === currentUser?.id
                        ? "flex-end "
                        : "flex-start",
                    textAlign:
                      mes.userId === currentUser?.id ? "right" : "left",
                  }}
                  className="w-[70%] relative "
                >
                  <p className="">{mes.text} </p>
                  <p
                    style={{
                      alignSelf:
                        mes.userId === currentUser?.id
                          ? "flex-end  "
                          : "flex-start",
                      textAlign:
                        mes.userId === currentUser?.id ? "right" : "left",
                    }}
                    className={`  italic text-[7px] px-1  `}
                  >
                    {/* {format (mes.createdAt)}{" "} */}
                  </p>
                </div>
              ))}
            </div>
            <form className="" onSubmit={handleAddMessage}>
              <textarea
                name="text"
                id=""
                className="w-full resize-none h-[50px] rounded-lg outline-none "
              />
              <button className="px-3 py-2 cursor-pointer bg-yellow-400 text-xl border-none rounded-lg font-semibold capitalize text-gray-600">
                send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
