"use client";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/rtk-store";

const RTKProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <Provider store={store}>{children} </Provider>;
  }
};

export default RTKProvider;
