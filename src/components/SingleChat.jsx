"use client";
import React from "react";
import Image from "next/image";
import { useGetSingleChatQuery } from "@/app/apis/_index.chat.api";

const SingleChat = ({ chat, setChatbox }) => {
  // const { data } = useGetSingleChatQuery(chat.id);
  const handleSingleChat = async (chatId) => {
    try {
      if (chat) {
        setChatbox(chat);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={() => handleSingleChat(chat?.id)}
      className=" flex cursor-pointer  gap-4 items-center p-3 rounded-md bg-white"
    >
      <div className=" relative w-[40px] h-[40px] ">
        <Image
          className="rounded-full object-cover"
          src={chat?.otherUser?.avatar}
          fill
          alt=""
        />
      </div>
      <p className="font-semibold capitalize text-sm">
        {chat?.otherUser?.username}{" "}
      </p>
      <p className="">{chat?.lastmessage} </p>
    </div>
  );
};

export default SingleChat;
