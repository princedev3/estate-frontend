"use client";
import Formalert from "@/components/formalert";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRegisterMutation } from "../apis/_index.user.apis";

const Register = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [register, { error, isSuccess }] = useRegisterMutation();
  const router = useRouter();
  const [file, setFile] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const formdata = new FormData(target);
    formdata.set("avatar", file);
    const res = await register(formdata);
    if (res.data.message === "Form data received successfully") {
      target.reset();
      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        router.push("/login");
      }, 3000);
    }
  };

  return (
    <div className="flex w-[60%] md:w-[95%] mx-auto min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className=" flex-[3] flex items-center justify-center w-full  "
      >
        <div className="w-full md:w-[350px]">
          <h1 class="mb-4 text-3xl font-normal capitalize text-center leading-none tracking-tight text-gray-900   dark:text-white">
            Create an account
          </h1>
          <div className="mb-5">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border outline-none  border-gray-300 placeholder:uppercase text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              name="username"
              type="username"
              id="username"
              className="bg-gray-50 border outline-none  border-gray-300 placeholder:uppercase text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="surname"
              required
            />
          </div>
          <div className="mb-5">
            <input
              name="password"
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:uppercase outline-none "
              required
              placeholder="password"
            />
          </div>
          <div className="flex items-start mb-5">
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={(e) => setFile(e.target.files?.[0])}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:uppercase outline-none "
              placeholder="choose image"
            />
          </div>
          <div className="flex items-start mb-5">
            {formSuccess && (
              <Formalert status={"User registration successful"} />
            )}
          </div>
          <button
            type="submit"
            className="text-white mb-4 bg-teal-700 focus:outline-none font-medium rounded-lg text-sm w-full  p-5  text-center "
          >
            Submit
          </button>
          <Link href={"/login"} className="text-gray-500 underline">
            Do have an account?
          </Link>
        </div>
      </form>
      <div className="flex-[2] bg-[#fcf5f3] relative  hidden md:flex">
        <Image src="/bg.png" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Register;
