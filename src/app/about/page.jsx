"use client";
import { housingFAQs } from "@/libs/data";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaTimes as X, FaPlus as Plus } from "react-icons/fa";

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const responsive = {
    mobile: {
      breakpoint: { max: 1500, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="grid  w-full  px-4 lg:px-0 max-w-[75rem] mx-auto mt-4 gap-y-5">
      <div className="h-[60vh] w-full relative bg-black rounded-lg">
        <div
          className="bg-white absolute top-0 right-0 w-full h-full"
          style={{
            clipPath:
              "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
          }}
        >
          <Carousel
            autoPlay={true}
            autoPlaySpeed={4000}
            infinite={true}
            responsive={responsive}
            className="w-full h-[60vh]"
          >
            <div className="relative w-full h-[60vh]">
              <Image alt="" src={"/h1.jpg"} fill className="object-cover " />
            </div>
            <div className="relative w-full h-[60vh]">
              <Image alt="" src={"/h3.jpg"} fill className="object-cover " />
            </div>
            <div className="relative w-full h-[60vh]">
              <Image alt="" src={"/h2.jpg"} fill className="object-cover " />
            </div>
            <div className="relative w-full h-[60vh]">
              <Image alt="" src={"/h4.jpg"} fill className="object-cover " />
            </div>
            <div className="relative w-full h-[60vh]">
              <Image alt="" src={"/h5.jpg"} fill className="object-cover " />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="grid grid-flow-col gap-3">
        <p className="">
          <span className="text-3xl font-bold">L</span>orem, ipsum dolor sit
          amet consectetur adipisicing elit. Reprehenderit, repellat enim.
          Quisquam beatae, quibusdam, natus illo modi at delectus excepturi
          sapiente fugiat odio totam itaque voluptatem commodi qui autem
          voluptates saepe sequi placeat reiciendis minima fugit iusto. Nam
          voluptates praesentium pariatur sit eligendi vel maiores earum
          temporibus quibusdam! Ipsam facilis excepturi dolorem placeat, modi
          perspiciatis, consequatur soluta nobis, quas praesentium ex nulla.
          Molestiae omnis vel debitis, labore velit deserunt iure eaque
          quisquam. Soluta assumenda repellendus ad voluptate eum libero facere!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, repellat enim. Quisquam beatae, quibusdam, natus illo
          modi at delectus excepturi sapiente fugiat odio totam itaque
          voluptatem commodi qui autem voluptates saepe sequi placeat reiciendis
          minima fugit iusto. Nam voluptates praesentium pariatur sit eligendi
          vel maiores earum temporibus quibusdam! Ipsam facilis excepturi
          dolorem placeat, modi perspiciatis, consequatur soluta nobis, quas
          praesentium ex nulla. Molestiae omnis vel debitis, labore velit
          deserunt iure eaque quisquam. Soluta assumenda repellendus ad
          voluptate eum libero facere!
        </p>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, repellat enim. Quisquam beatae, quibusdam, natus illo
          modi at delectus excepturi sapiente fugiat odio totam itaque
          voluptatem commodi qui autem voluptates saepe sequi placeat reiciendis
          minima fugit iusto. Nam voluptates praesentium pariatur sit eligendi
          vel maiores earum temporibus quibusdam! Ipsam facilis excepturi
          dolorem placeat, modi perspiciatis, consequatur soluta nobis, quas
          praesentium ex nulla. Molestiae omnis vel debitis, labore velit
          deserunt iure eaque quisquam. Soluta assumenda repellendus ad
          voluptate eum libero facere!
        </p>
      </div>
      <div className="grid gap-y-4">
        <h1 className="text-3xl font-semibold my-2">FAQs</h1>
        {housingFAQs.map((faq, index) => (
          <div
            key={index}
            className="flex bg-gray-50 flex-col items-center justify-center p-4 px-6 rounded-3xl transition-all duration-200 ease-in-out cursor-pointer"
          >
            <div className="w-full flex flex-col justify-between">
              <div className="flex w-full justify-between items-center p-1 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold capitalize ">
                  {faq.question}
                </h2>
                <div onClick={() => toggleOpen(index)}>
                  {openIndex === index ? (
                    <X className="text-3xl text-blue-950 font-bold" />
                  ) : (
                    <Plus className="text-3xl text-blue-950 font-bold" />
                  )}
                </div>
              </div>
              <div
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                style={{
                  height:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out rounded-lg "
              >
                <p className="  p-1">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
