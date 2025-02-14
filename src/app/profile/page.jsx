"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineHotel } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { RiSaveLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import Link from "next/link";
import Chat from "@/components/Chat";
import useUserStore from "@/store/user-store";
import { useLogoutMutation } from "../apis/_index.user.apis";
import { useRouter } from "next/navigation";
import { useGetFavoriteProductQuery } from "../apis/_index.product.api";
import Card from "@/components/Card";
import { useGetAllChatQuery } from "../apis/_index.chat.api";

const Profile = () => {
  const { data } = useGetFavoriteProductQuery();
  const { data: chatDatas } = useGetAllChatQuery();
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const [logout] = useLogoutMutation();
  const clearUser = useUserStore((state) => state.clearUser);
  const handleLogout = async () => {
    try {
      await logout();
      clearUser();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <div className="grid lg:grid-flow-col   w-full max-w-[75rem] mx-auto px-4 xl:px-0 ">
      <div className=" overflow-y-hidden">
        <div className="">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-light capitalize">user information</h1>
            <Link
              href={"/profile/update"}
              className="px-3 py-2 bg-yellow-400 font-semibold capitalize"
            >
              update profile
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center  gap-10">
              <p>avatar</p>
              <div className="relative w-[40px] h-[40px] ">
                <Image
                  className="rounded-full object-cover"
                  src={user?.avatar}
                  alt=""
                  fill
                />
              </div>
            </div>
            <div className="flex gap-10">
              <p className="">username:</p>
              <p className="capitalize font-semibold">{user?.username} </p>
            </div>
            <div className="flex gap-10">
              <p className="">email:</p>
              <p className="font-semibold capitalize">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="my-3 py-2 px-3 rounded-md hover:bg-blue-700 hover:px-4  transition-all duration-300 bg-blue-500 text-white font-semibold uppercase tracking-wider"
          >
            Logout
          </button>
        </div>
        <div className="lg:overflow-y-auto no-scrollbar h-full ">
          <div className="flex justify-between items-center my-8">
            <h1 className="text-3xl font-light">My List </h1>
            <Link
              href={"/newpost"}
              className="px-3 py-2 bg-yellow-400 font-semibold capitalize"
            >
              add new post
            </Link>
          </div>
          <div className=" flex flex-col gap-8    mb-[10vh]  ">
            {data?.length > 0 ? (
              data?.map((item) => <Card item={item} />)
            ) : (
              <p>No Home liked </p>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-y-hidden">
        {chatDatas?.length ? (
          <Chat allChats={chatDatas} />
        ) : (
          <p className="">loading chats</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
