"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [query, setQuery] = useState({
    type: "buy",
    minPrice: 0,
    maxPrice: 100000,
    city: "",
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="w-full ">
        <div className="">
          <div className="">
            <button
              className={`${
                query.type === "buy"
                  ? "bg-black text-white"
                  : "text-black border"
              } tracking-widest text-lg px-3 py-2 rounded-tl-md `}
              onClick={() => switchType("buy")}
            >
              Buy
            </button>
            <button
              className={` ${
                query.type === "rent" ? "bg-black text-white" : "text-black"
              } text-lg tracking-widest p-2 border rounded-tr-md `}
              onClick={() => switchType("rent")}
            >
              Rent
            </button>
          </div>
          <form action="" className="flex flex-col md:flex-row  ">
            <input
              className="outline-none border md:border-l md:border-t md:border-b w-full md:w-[180px] p-2"
              type="text"
              name="city"
              placeholder="City Location"
              onChange={handleChange}
            />
            <input
              onChange={handleChange}
              className="outline-none border  md:border-t md:border-b  md:w-[180px] p-2"
              type="text"
              name="minPrice"
              placeholder="Min Price"
            />
            <input
              onChange={handleChange}
              className="outline-none border md:w-[180px]  md:border-t md:border-b md:border-r p-2"
              type="text"
              name="maxPrice"
              placeholder="Max Price"
            />
            <Link
              href={`/listpage?city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}&type=${query.type}&page=1`}
            >
              <button className="px-2  bg-yellow-500 place-items-center flex items-center justify-center py-2">
                <CiSearch className="text-2xl  text-white !font-bold" />
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
