"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "@/components/FormInputs/TextInput";
import NavButtons from "@/components/FormInputs/NavButtons";
import {
  setCurrentStep,
  updateFormdata,
} from "@/redux/slices/onboardingStudentSlice";

const EducationBackgroundForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.onboarding.updateFormData);
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...formData },
  });

  // console.log(formData);

  const processData = (data) => {
    // All Data is Valid
    //Collect all the data
    //Update Data in the Global state
    dispatch(updateFormdata(data));
    //Make API Request to Save the Data also in the DB

    //Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
    // console.log(data);
  };

  // console.log(formData);
  // console.log(currentStep);

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Education Background
        </h5>
        <p>Please provide your name, email and phone number</p>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <TextInput
          label="Enter Highest Level of Education"
          name="levelOfEducation"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Name of the last Institution Attended"
          name="previousInstitution"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Graduation Year"
          name="graduationYear"
          type="number"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default EducationBackgroundForm;