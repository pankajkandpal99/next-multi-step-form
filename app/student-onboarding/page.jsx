import StepForm from "@/components/MultiStepForm/StepForm";
import Steps from "@/components/MultiStepForm/Steps";

const StudentOnboarding = () => {
  const steps = [
    { number: 1, title: "Personal Info" },
    {
      number: 2,
      title: "Education Background",
    },
    {
      number: 3,
      title: "Programming Experience",
    },
    {
      number: 4,
      title: "Preffered Programming Languages",
    },
    {
      number: 5,
      title: "Technical Skills Assessments",
    },
    // {
    //   number: 6,
    //   title: "Availability and Commitment",
    // },
    // {
    //   number: 7,
    //   title: "Career Goals and Motivation",
    // },
    // {
    //   number: 8,
    //   title: "Additional Information",
    // },
    {
      number: 6,
      title: "Submit and Confirmation",
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen p-4">
      <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 grid grid-cols-12 gap-4 min-h-screen">
        {/* Steps */}
        <Steps steps={steps} />

        {/* Form */}
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </div>
    </div>
  );
};

export default StudentOnboarding;
