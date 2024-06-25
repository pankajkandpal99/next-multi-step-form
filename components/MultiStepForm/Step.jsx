"use client";
import React from "react";
import { useSelector } from "react-redux";

const Step = ({ step }) => {
  const { number, title } = step;
  const currentStep = useSelector((store) => store.onboarding.currentStep);

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 ">
      <div
        className={`w-8 md:w-12 h-8 md:h-12 text-slate-50 border border-slate-50 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
          number === currentStep ? "bg-blue-300 border-0" : ""
        }`}
      >
        {number}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-slate-200 text-sm uppercase">Step {number}</h4>
        <h3 className="uppercase text-sm text-white font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Step;
