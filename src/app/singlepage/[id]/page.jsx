"use client";
import { useGetSingleProductQuery } from "@/app/apis/_index.product.api";
import Map from "@/components/Map";
import { listData } from "@/libs/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const SingePage = () => {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = params;
  const { data, isLoading } = useGetSingleProductQuery(id);
  if (isLoading) {
    return <span className="">Loading...</span>;
  }

  return (
    <div className="grid max-w-6xl mx-auto p-5 lg:p-0 lg:grid-cols-[2fr,1fr] gap-4">
      <div className="grid gap-4">
        <div className="grid grid-cols-[2fr,1fr] gap-3">
          <div className="h-[50vh] relative ">
            <Image
              alt=""
              src={data?.images[selectedImage]}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="">
            <div className="relative grid grid-cols-2 gap-2 w-full ">
              {data?.images.map((url, idx) => (
                <div key={url} className="relative w-full h-[25vh] ">
                  <Image
                    onClick={() => setSelectedImage(idx)}
                    src={url}
                    alt="Product Image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-flow-col justify-between">
            <div className="grid gap-y-3 w-full">
              <h1 className="text-2xl font-light">{data?.title} </h1>
              <div className="flex gap-2">
                <Image
                  src={"/pin.png"}
                  alt=""
                  width={15}
                  height={15}
                  className="object-contain"
                />
                <span className="text-sm">
                  {data?.address} {data.city}{" "}
                </span>
              </div>
              <span className="text-sm w-fit p-2 bg-yellow-300">
                ${data?.price}{" "}
              </span>
            </div>
            <div className=" bg-yellow-300 rounded-lg flex-col  w-[100px] flex items-center justify-center">
              <Image
                src={data?.user?.avatar}
                width={50}
                height={50}
                alt=""
                className="rounded-full object-cover min-w-[50px] min-h-[50px] "
              />
              <span className="capitalize font-semibold ">
                {data?.user?.username.split(" ")[0].slice(0, 12)}{" "}
              </span>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.desc }} />
      </div>
      <div className="min-h-[30vh] ">{/* <Map items={listData} /> */}</div>
    </div>
  );
};

export default SingePage;
