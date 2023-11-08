import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
