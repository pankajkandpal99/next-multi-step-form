const { configureStore } = require("@reduxjs/toolkit");
import onboardingStudentSlice from "./slices/onboardingStudentSlice";

export const store = configureStore({
  reducer: {
    // all slices
    onboarding: onboardingStudentSlice,
  },
});
