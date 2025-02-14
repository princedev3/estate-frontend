"use client";
import { listData } from "@/libs/data";
import Filter from "@/components/Filter";
import React, { Suspense } from "react";
import Map from "../../components/Map";
import Card from "@/components/Card";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetAllProductQuery } from "../apis/_index.product.api";

const ListPage = () => {
  const router = useRouter();
  const POST_PER_PAGE = 4;
  const searchParams = useSearchParams();

  const query = {
    type: searchParams.get("type"),
    minPrice: searchParams.get("minPrice"),
    maxPrice: searchParams.get("maxPrice"),
    city: searchParams.get("city"),
    bedroom: searchParams.get("bedroom"),
    bathroom: searchParams.get("bathroom"),
    property: searchParams.get("property"),
    page: searchParams.get("page"),
  };

  const { data, error, isLoading } = useGetAllProductQuery(query);
  if (isLoading) {
    return <span className="">Loading</span>;
  }

  const paramHelperFunc = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    router.push(`/listpage?${params.toString()}`);
  };
  const handleNext = () => {
    const currentPage = parseInt(query.page);
    if (currentPage < data.count / POST_PER_PAGE) {
      paramHelperFunc((currentPage + 1).toString());
    }
  };
  const handlePrevious = () => {
    const currentPage = parseInt(query.page);
    if (currentPage > 1) {
      paramHelperFunc((currentPage - 1).toString());
    }
  };
  return (
    <div className="flex h-full  w-[95%] mx-auto">
      <div className="flex-[3] w-full relative lg:overflow-y-scroll no-scrollbar h-screen">
        <div className="pr-[20px]  w-full relative ">
          <Filter query={query} />
          <div className="my-[2rem]   w-full flex flex-col gap-11 ">
            <Suspense fallback={<p>Loading feed...</p>}>
              {data?.allHomes?.length === 0 ? (
                <p className="mb-3  text-2xl text-gray-500 dark:text-gray-400">
                  Sorry no item found
                </p>
              ) : (
                data?.allHomes?.map((item) => (
                  <Card item={item} key={item?.id} />
                ))
              )}
            </Suspense>
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={parseInt(query.page) === 1}
                className="text-white bg-blue-700 disabled:cursor-not-allowed hover:bg-blue-800 w-fit  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-red-600"
              >
                prev
              </button>
              <button
                onClick={handleNext}
                disabled={
                  Math.ceil(data?.count / POST_PER_PAGE) === Number(query.page)
                }
                className="text-white disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 w-fit  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-red-600"
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] hidden lg:flex   pl-4">
        <Suspense fallback={<p>Loading feed...</p>}></Suspense>
      </div>
    </div>
  );
};

export default ListPage;
