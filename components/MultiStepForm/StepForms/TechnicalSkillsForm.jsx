"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import TexrtAreaInput from "@/components/FormInputs/TexrtAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import {
  setCurrentStep,
  updateFormdata,
} from "@/redux/slices/onboardingStudentSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const TechnicalSkillsForm = () => {
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
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          TECHNICAL SKILLS ASSESSMENT
        </h5>
        <p>Please provide your info.</p>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <TexrtAreaInput
          label="What is Redux and its Purpose"
          name="whatIsRedux"
          register={register}
          errors={errors}
        />
        <TextInput
          label="How do you Rank your self: Beginner,Intermediate , Senior"
          name="rankOfExperience"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default TechnicalSkillsForm;
