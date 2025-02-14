"use client";

import Hero from "@/components/Hero";
import useUserStore from "@/store/user-store";
import React from "react";

const Home = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="min-h-[calc(100vh-100px)] ">
      <Hero />
    </div>
  );
};

export default Home;
