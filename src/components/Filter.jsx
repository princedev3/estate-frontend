"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Filter = ({ query }) => {
  const router = useRouter();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const searchParams = new URLSearchParams(window.location.search);

    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }

    router.push(`/listpage?${searchParams.toString()}`);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold">
        search results for <b>{query?.city || "Enter your city"} </b>
      </h1>
      <div className="flex flex-col p-2 ">
        <label htmlFor="city">Location</label>
        <input
          onChange={handleFilterChange}
          className="w-full p-2 border outline-none"
          type="text"
          id="location"
          name="city"
          placeholder={query.city || "Location"}
        />
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col p-2 ">
          <label htmlFor="city">Type</label>
          <select
            value={query.type}
            onChange={handleFilterChange}
            className="w-[100px] border outline-none p-2 "
            name="type"
            id="type"
          >
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        {/* <div className="flex flex-col p-2 ">
          <label htmlFor="property">Property</label>

          <select
            onChange={handleFilterChange}
            className="w-[100px] p-2 border outline-none"
            name="property"
            id="property"
          >
            <option value="apartment">apartment</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div> */}
        <div className="flex flex-col p-2 ">
          <label htmlFor="city">max price</label>
          <input
            onChange={handleFilterChange}
            className="w-[100px] p-2 border outline-none"
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="1000000"
          />
        </div>
        <div className="flex flex-col p-2 ">
          <label htmlFor="city">min price</label>
          <input
            onChange={handleFilterChange}
            className="w-[100px] p-2 border outline-none "
            type="text"
            id="minPrice"
            name="minPrice"
            placeholder="200"
          />
        </div>
        <div className="flex flex-col p-2 ">
          <label htmlFor="city">bedroom</label>
          <input
            onChange={handleFilterChange}
            className="w-[100px] p-2 border outline-none"
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="1"
          />
        </div>

        {/* <button className=" border-none h-[73px] w-[60px] bg-yellow-500 place-items-center text-2xl flex items-center justify-center ">
          <Image src={"/search.png"} width={20} height={20} alt="" />
        </button> */}
      </div>
    </div>
  );
};

export default Filter;
