import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
