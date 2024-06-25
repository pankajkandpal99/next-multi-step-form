"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const StudentProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StudentProviders;
