"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import {
  setCurrentStep,
  updateFormdata,
} from "@/redux/slices/onboardingStudentSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ProgrammingExperienceForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...formData } });

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
  ];

  const processData = async (data) => {
    // All Data is Valid
    //Collect all the data
    //Update Data in the Global state
    dispatch(updateFormdata(data));
    //Make API Request to Save the Data also in the DB

    //Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
    // console.log(data);
    //Update the url
  };

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="">Programming Experience</h5>
        <p className="">Please provide your info here.</p>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <SelectInput
          label="Programming Languages Known"
          name="knownLanguages"
          multiple={true}
          register={register}
          options={languages}
        />

        <TextInput
          label="Years of Programming Experience"
          name="programmingExperience"
          register={register}
          errors={errors}
        />

        <TextInput
          label="Portfolio Link"
          name="portfolioLink"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default ProgrammingExperienceForm;
