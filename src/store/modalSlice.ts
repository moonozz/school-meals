import { createSlice } from "@reduxjs/toolkit";
// import ModalStore from "./store";
import ModalType from "./modalType";
// import { ReactNode } from "react";

const initialState: ModalType = {
  // type: "",
  modal: true,
};

const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    setModalOpen: (state) => {
      state.modal = false;
      // state.modal = true;
    },
    setModalClose: (state) => {
      // state.modal = false;
      state.modal = true;
    },
  },
});

export const { setModalOpen, setModalClose } = ModalSlice.actions;
export default ModalSlice;
