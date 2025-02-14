import Image from "next/image";
import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="md:w-[95%] flex mx-auto h-full ">
      <div className="flex-[3] ">
        <div className="flex flex-col gap-8 w-full p-4 ">
          <h2 className="text-3xl font-semibold">
            find real estates & get your dream place find real estate & get yor
            dream place
          </h2>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis illo rem modi repellat hic expedita esse nulla veniam
            quos nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Perferendis illo rem modi repellat hic expedita esse nulla
            veniam quos nesciunt. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Perferendis illo rem modi repellat hic expedita
            esse nulla veniam quos nesciunt. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Perferendis illo rem modi repellat hic
            expedita esse nulla veniam quos nesciunt.
          </p>
          <Search />
          <div className="flex w-full justify-between items-center">
            <div className="">
              <h1 className="text-2xl font-semibold">16+</h1>
              <h2 className="text-sm text-black/60 capitalize">
                Years of Experience
              </h2>
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold">200</h1>
              <h2 className="text-sm text-black/60 capitalize">award gained</h2>
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold">1200+</h1>
              <h2 className="text-sm text-black/60 capitalize">
                Property ready
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[2] bg-[#fcf5f3] relative h-[calc(100vh-100px)]  hidden md:flex">
        <Image src="/bg.png" fill className="object-cover" alt="" />
      </div>
    </div>
  );
};

export default Hero;
