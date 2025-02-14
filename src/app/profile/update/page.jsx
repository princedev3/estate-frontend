"use client";

import { useUpdateUserMutation } from "@/app/apis/_index.user.apis";
import useUserStore from "@/store/user-store";
import Image from "next/image";
import React, { useState } from "react";

const Update = () => {
  const [file, setFiles] = useState();
  const userDetails = useUserStore((state) => state.user);
  const addUser = useUserStore((state) => state.addUser);
  const [updateUser, { error, isSuccess }] = useUpdateUserMutation();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const target = e.target;
    const formdata = new FormData(target);
    formdata.set("avatar", file);
    formdata.append("email", e.target.email.value);
    const res = await updateUser(formdata);
    if (isSuccess) {
      addUser(res?.data);
      target.reset();
      setFiles("");
    }
  };
  return (
    <div className="grid grid-flow-col w-full max-w-3xl md:grid-cols-[3fr,2.3fr] 0 mx-auto ">
      <div className="">
        <h2 class="text-4xl text-center font-extrabold dark:text-white capitalize mb-8">
          update profile
        </h2>
        <form onSubmit={handleUpdateProfile} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              for="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              username
            </label>
            <input
              type="text"
              name="username"
              className="bg-gray-50 border placeholder:capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={
                userDetails?.username.charAt(0).toUpperCase() +
                userDetails?.username.slice(1)
              }
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              disabled
              type="email"
              name="email"
              id="email"
              value={userDetails?.email}
              className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={userDetails?.email}
              required
            />
          </div>

          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={(e) => setFiles(e.target.files?.[0])}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {/* {error && (
            <div className="text-sm my-3 text-red-600 italic">{error} </div>
          )}
          {success && (
            <div className="text-sm my-3 text-green-600 italic">{success} </div>
          )} */}

          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize"
          >
            update
          </button>
        </form>
      </div>
      <div className="relative hidden md:block">
        <Image
          // width={200}
          // height={200}
          className="object-cover rounded-md"
          fill
          src={userDetails?.avatar || "/bg.png"}
        />
      </div>
    </div>
  );
};

export default Update;
