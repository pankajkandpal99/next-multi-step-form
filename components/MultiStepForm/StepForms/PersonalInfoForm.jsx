"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import {
  setCurrentStep,
  updateFormdata,
} from "@/redux/slices/onboardingStudentSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const PersonalInfoForm = () => {
  const [loading, setLoading] = useState(false);
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const dispatch = useDispatch();
  const formData = useSelector((store) => store.onboarding.formData);

  // console.log(formData);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...formData },
  });

  const gender = [
    {
      id: "male",
      title: "Male",
    },
    {
      id: "female",
      title: "Female",
    },
  ];

  async function processData(data) {
    // all data is valid
    // collect all the data
    // Update data in the global state
    dispatch(updateFormdata(data));
    // Update the current step
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900">
          Personal Info
        </h5>
        <p>Please providde your name, email address and phone number.</p>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <TextInput
          label="Full Name"
          name="fullName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />

        <TextInput
          label="Phone Number"
          name="phone"
          type="number"
          register={register}
          errors={errors}
        />

        <TextInput
          label="Date of Birth"
          type="date"
          name="dob"
          register={register}
          errors={errors}
        />

        <SelectInput
          label="Select your Gender"
          name="gender"
          register={register}
          options={gender}
        />

        <TextInput
          label="Your Location Address"
          name="location"
          register={register}
          errors={errors}
        />

        <TextInput
          label="Your Country of Residence"
          name="country"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default PersonalInfoForm;
