"use client";
import useUserStore from "@/store/user-store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const user = useUserStore((state) => state.user);
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[100px] grid w-full grid-flow-col items-center max-w-[75rem] mx-auto overflow-hidden ">
      <div className="grid grid-flow-col gap-5">
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
      <div className="h-full bg-[#fcf5f3]  grid items-center  justify-end !overflow-hidden">
        <div className="grid grid-flow-col items-center justify-center h-full gap-4 !overflow-x-hidden ">
          {user ? (
            <>
              <div className="flex items-center justify-between gap-7">
                <div className="relative min-w-[40px] min-h-[40px] rounded-full ">
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
        </div>
        <div
          className={
            open
              ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white lg:hidden backdrop-blur"
              : ""
          }
        >
          <div
            className={
              open
                ? "fixed w-full text-left bg-[#5c5b5b] left-0 top-0 bottom-0 text-white h-full p-10 py-10 ease-in duration-500"
                : "fixed p-10 w-full left-[-100%] z-50 top-0 duration-1000 h-full ease-in"
            }
          >
            <div className="flex items-center justify-center h-full gap-4 flex-col">
              <Link
                onClick={() => setOpen(false)}
                href={"/"}
                className=" md:flex hover:scale-105 ease-in-out transition-all duration-700"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href={"/about"}
                className=" md:flex hover:scale-105 ease-in-out transition-all duration-700"
              >
                About
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href={"/contact"}
                className=" md:flex hover:scale-105 ease-in-out transition-all duration-700"
              >
                Contact
              </Link>

              <Link
                href={"/login"}
                onClick={() => setOpen(false)}
                className="md:flex hover:scale-105 ease-in-out transition-all duration-700 "
              >
                login
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href={"/register"}
                className="md:flex hover:scale-105 ease-in-out transition-all duration-700"
              >
                sign-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
