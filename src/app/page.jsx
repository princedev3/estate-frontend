"use client";

import Hero from "@/components/Hero";
import useUserStore from "@/store/user-store";
import React from "react";

const Home = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="grid w-full items-center max-w-[75rem] mx-auto ">
      <Hero />
    </div>
  );
};

export default Home;
