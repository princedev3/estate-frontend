"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLoginMutation } from "../apis/_index.user.apis";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/user-store";

const Login = () => {
  const [login] = useLoginMutation();
  const router = useRouter();
  const adduser = useUserStore((state) => state.addUser);
  const handleLogin = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const email = formdata.get("email");
    const password = formdata.get("password");
    const res = await login({ email, password });
    adduser(res.data.user);
    // console.log(res.data.user);
    if (res.data.message === "login in successfull") {
      router.push("/");
    }
  };
  return (
    <div className="flex w-[60%] md:w-[95%] mx-auto min-h-screen ">
      <form
        onSubmit={handleLogin}
        className=" flex-[3] flex items-center justify-center w-full  "
      >
        <div className="w-full md:w-[350px]">
          <h1 className="mb-4 text-4xl font-normal capitalize text-center leading-none tracking-tight text-gray-900 md:text-5xl  dark:text-white">
            welcome back
          </h1>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border outline-none  border-gray-300 placeholder:uppercase text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:uppercase outline-none "
              required
              placeholder="password"
            />
          </div>
          <div className="flex items-start mb-5"></div>
          <button
            type="submit"
            className="text-white mb-4 bg-teal-700 focus:outline-none font-medium rounded-lg text-sm w-full  p-5  text-center "
          >
            Submit
          </button>
          <Link href={"/register"} className="text-gray-500 underline">
            Don't have an account?
          </Link>
        </div>
      </form>
      <div className="flex-[2] bg-[#fcf5f3] relative  hidden md:flex">
        <Image src="/bg.png" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Login;
