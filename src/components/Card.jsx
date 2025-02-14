"use client";
import { useCreateChatMutation } from "@/app/apis/_index.chat.api";
import { useSavedAPostMutation } from "@/app/apis/_index.product.api";
import useUserStore from "@/store/user-store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { CiBookmark } from "react-icons/ci";

const Card = ({ item }) => {
  const [createChat] = useCreateChatMutation();
  const userId = useUserStore((state) => state.user.id);
  const router = useRouter();
  const [savedAPost, { isError, isLoading, isSuccess }] =
    useSavedAPostMutation();
  const handleSavePost = async () => {
    try {
      const res = await savedAPost({
        userId,
        homeId: item?.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateChat = async () => {
    const res = await createChat({
      recieverId: item.userId,
      senderId: userId,
    });
    if (
      res?.data.message === "existing chat" ||
      res?.data.message === "created chat"
    ) {
      router.push("/profile");
    }
  };
  return (
    <div className="flex gap-2  ">
      <div className="relative flex-[2] h-[200px]">
        <Link href={`/singlepage/${item.id}  `}>
          <Image
            src={`${item?.images[0]}`}
            fill
            alt=""
            className="object-cover rounded-lg"
          />
        </Link>
      </div>
      <div className="flex-[2] flex flex-col justify-between">
        <h2 className=" text-base font-semibold">
          <Link href={`${item?.id}`}>{item?.title} </Link>
        </h2>
        <p className="flex gap-1">
          <Image
            src={"/pin.png"}
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
          <span>{item.address} </span>
        </p>
        <p className="bg-yellow-500/60 w-fit  p-1 text-gray-600">
          $ {item.price}{" "}
        </p>
        <div className="flex gap-2">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col md:flex-row">
              <Image src={"/bed.png"} alt="" width={15} height={15} />
              <span className="text-sm md:text-base ">
                {item.bedroom}bedroom{" "}
              </span>
            </div>
            <div className="flex  flex-col md:flex-row">
              <Image src={"/bath.png"} alt="" width={15} height={15} />
              <span className="text-sm md:text-base">
                {item.bathroom} bathroom{" "}
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-center self-end mb-1">
            <CiBookmark
              style={{ fill: item.isSaved ? "#eab308 " : "black" }}
              onClick={handleSavePost}
              className={`${
                item.isSaved ? " fill-[#eab308] " : "fill-black"
              } cursor-pointer  `}
            />
            {/* <Image
              onClick={handleSavePost}
              src={"/save.png"}
              alt=""
              width={15}
              height={15}
              className="object-contain text-red-500 cursor-pointer fill-black "
            /> */}
            {userId !== item.userId && (
              <Image
                onClick={handleCreateChat}
                src={"/chat.png"}
                alt=""
                width={15}
                height={15}
                className="object-contain cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
