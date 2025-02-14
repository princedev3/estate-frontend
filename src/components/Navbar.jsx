"use client";
import useUserStore from "@/store/user-store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const user = useUserStore((state) => state.user);

  const [open, setOpen] = useState(false);

  return (
    <div className="h-[100px] flex  w-[95%] mx-auto ">
      <div className="flex-[3] flex items-center gap-5 ">
        <Link
          href={"/"}
          className="flex items-center  gap-3 mb-2 justify-center hover:scale-105 ease-in-out transition-all duration-700"
        >
          <Image
            src={"/logo.png"}
            alt=""
            width={25}
            height={25}
            className="mb-2"
          />
          <p className="font-semibold text-lg  ">
            <span className="text-2xl">M</span>arvinEstate
          </p>
        </Link>
        <div className=" flex items-center gap-5">
          <Link
            href={"/"}
            className="hidden md:flex hover:scale-105 ease-in-out transition-all duration-700"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="hidden md:flex hover:scale-105 ease-in-out transition-all duration-700"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="hidden md:flex hover:scale-105 ease-in-out transition-all duration-700"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex-[2] bg-[#fcf5f3] ">
        <div className="flex flex-[2] items-center justify-end gap-4 md:bg-[#fcf5f3] h-full ">
          {user ? (
            <>
              <div className="flex items-center justify-between gap-7">
                <div className="relative w-[40px] h-[40px] rounded-full ">
                  <Image
                    src={user?.avatar || "/favicon.png"}
                    fill
                    className="rounded-full hidden md:flex object-cover"
                  />
                </div>
                <span className="cursor-pointer font-semibold capitalize  hidden md:flex">
                  {user?.username}
                </span>
                <Link
                  href={"/profile"}
                  className="relative cursor-pointer font-semibold capitalize bg-yellow-400 px-2 py-1 rounded-sm"
                >
                  Profile
                  {/* <span className="absolute -top-4 -right-1 text-[10px] text-white bg-red-600 px-2 py-1 rounded-full">
                    3
                  </span> */}
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                className="hidden md:flex text-xl capitalize hover:scale-105 ease-in-out transition-all duration-700 "
              >
                login
              </Link>
              <Link
                href={"/register"}
                className="hidden text-xl  capitalize md:flex hover:scale-105 ease-in-out transition-all duration-700 bg-[#fece51]  px-3 py-2"
              >
                sign up
              </Link>
            </>
          )}
          <div className="md:hidden    z-[99999] ">
            <Image
              src={"/menu.png"}
              width={40}
              height={40}
              alt=""
              onClick={() => setOpen(!open)}
            />
          </div>

          <div
            className={`${
              open
                ? "right-0 z-50  bg-black text-white font-semibold capitalize absolute top-0  w-1/2 h-full flex items-center flex-col justify-center gap-8 md:hidden"
                : "-right-[100%] z-50  bg-black text-white font-semibold capitalize absolute top-0  w-1/2 h-full flex items-center flex-col justify-center gap-8 "
            }' transition-all  ease-in-out duration-600 md:hidden`}
          >
            <Link
              href={"/"}
              className="transition-all duration-600 font-semibold  ease-in-out capitalize"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="transition-all duration-600 font-semibold  ease-in-out capitalize"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="transition-all duration-600 font-semibold  ease-in-out capitalize"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="transition-all duration-600 font-semibold  ease-in-out capitalize"
            >
              Agents
            </Link>
            <Link
              href={"/"}
              className="transition-all duration-600 font-semibold  ease-in-out capitalize "
            >
              sign-in
            </Link>
            <Link
              href={"/"}
              className="transition-all duration-600 font-semibold  ease-in-out capitalize"
            >
              sign-up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
