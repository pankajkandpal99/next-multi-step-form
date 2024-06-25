"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import {
  setCurrentStep,
  updateFormdata,
} from "@/redux/slices/onboardingStudentSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const PrefferedLanguageForm = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  const languages = [
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "php",
      title: "PHP",
    },
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "java",
      title: "Java",
    },
  ];

  async function processData(data) {
    // All Data is Valid
    //Collect all the data
    //Update Data in the Global state
    dispatch(updateFormdata(data));
    //Make API Request to Save the Data also in the DB

    //Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
    // console.log(data);
  }

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900">
          Programming Experience
        </h5>
        <p>Please provide your info here.</p>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <SelectInput
          label="Your preferred Languages"
          name="preferredLanguages"
          register={register}
          options={languages}
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default PrefferedLanguageForm;
