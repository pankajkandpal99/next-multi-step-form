"use client";
import React from "react";
import PersonalInfoForm from "./StepForms/PersonalInfoForm";
import EducationBackgroundForm from "./StepForms/EducationBackgroundForm";
import ProgrammingExperienceForm from "./StepForms/ProgrammingExperienceForm";
import PrefferedLanguageForm from "./StepForms/PrefferedLanguageForm";
import TechnicalSkillsForm from "./StepForms/TechnicalSkillsForm";
import FormConfirmation from "./StepForms/FormConfirmation";
import { useSelector } from "react-redux";

const StepForm = () => {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  console.log(currentStep);

  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalInfoForm />;
    } else if (step === 2) {
      return <EducationBackgroundForm />;
    } else if (step === 3) {
      return <ProgrammingExperienceForm />;
    } else if (step === 4) {
      return <PrefferedLanguageForm />;
    } else if (step === 5) {
      return <TechnicalSkillsForm />;
    } else if (step === 6) {
      return <FormConfirmation />;
    } else {
      return;
    }
  }

  return <div>{renderFormByStep(currentStep)}</div>;
};

export default StepForm;
