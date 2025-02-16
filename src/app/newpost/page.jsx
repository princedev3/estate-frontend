"use client";
import React, { useState } from "react";
import { useCreateProductMutation } from "../apis/_index.product.api";

const newPost = () => {
  const [createProduct, { isSuccess, isLoading }] = useCreateProductMutation();
  if (isLoading) {
    return <p className="">loading</p>;
  }
  const [types, setTypes] = useState("buy");

  const [value, setValue] = useState("");
  const [files, setFiles] = useState([]);
  const handleFilesChange = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleSubmitHome = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    files.map((file) => formData.append("images", file));
    formData.append("desc", value);
    formData.append("type", types);
    const res = await createProduct(formData);
    if (res.data.message === "home created successfully") {
      e.target.reset();
      setFiles([]);
      setValue("");
    }
  };
  return (
    <div className="">
      <div className="">
        <form
          onSubmit={handleSubmitHome}
          className="grid  w-full  max-w-[75rem] mx-auto px-4 xl:p-0  "
        >
          <div className="grid md:grid-cols-3 gap-3">
            <div className=" flex flex-col ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                Title
              </label>
              <input
                type="text"
                required
                name="title"
                id="title"
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                price
              </label>
              <input
                name="price"
                id="price"
                type="number"
                required
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                required
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col my-3">
            <label
              htmlFor=""
              className="capitalize mb-1 tracking-wide font-normal"
            >
              description
            </label>
            <textarea
              name=""
              id="value"
              className="border outline-none rounded-xl resize-none p-2"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-3 my-4">
            <div className=" flex flex-col flex-1">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                city
              </label>
              <input
                type="text"
                name="city"
                id="city"
                required
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                bedroom number
              </label>
              <input
                type="number"
                name="bedroom"
                id="bedroom"
                required
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                bathroom number
              </label>
              <input
                type="number"
                required
                name="bathroom"
                id="bathroon"
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3 my-4">
            <div className=" flex flex-col ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                latitude
              </label>
              <input
                type="number"
                step="0.00001"
                required
                name="latitude"
                id="latitude"
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                longitude
              </label>
              <input
                type="number"
                step="0.000001"
                required
                name="longitude"
                id="longitude"
                className="border text-xl p-2 outline-none rounded-lg"
              />
            </div>
            <div className="flex flex-col  ">
              <label
                htmlFor=""
                className="capitalize mb-1 tracking-wide font-normal"
              >
                type
              </label>
              <select
                className="border h-full rounded-lg p-3 md:p-0"
                name=""
                value={types}
                onChange={(e) => setTypes(e.target.value)}
                id=""
              >
                <option value="rent" className="w-full">
                  rent
                </option>
                <option value="buy" className="w-full">
                  buy
                </option>
              </select>
              {/* <input
                type="text"
                name="type"
                id="type"
                className="border text-xl p-2 outline-none rounded-lg"
              /> */}
            </div>
          </div>

          <div className="grid w-full  gap-3 my-4 mb-3">
            <input
              type="file"
              multiple
              onChange={handleFilesChange}
              id="file"
              className="border w-full text-xl p-2 outline-none rounded-lg"
            />

            <button
              disabled={isLoading}
              className=" disabled:cursor-not-allowed p-3  h-full w-full bg-cyan-800 text-white capitalize rounded-lg"
            >
              <span className=""> create home</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default newPost;
