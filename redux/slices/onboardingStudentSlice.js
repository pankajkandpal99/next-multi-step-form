const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentStep: 1,
  formData: {},
};

// create a slice
const onboardingStudentSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateFormdata: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentStep, updateFormdata } =
  onboardingStudentSlice.actions;

export default onboardingStudentSlice.reducer;
