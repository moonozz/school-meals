import { createSlice } from "@reduxjs/toolkit";
// import ModalStore from "./store";
import ModalType from "./modalType";
// import { ReactNode } from "react";

const initialState: ModalType = {
  type: "",
  modal: true,
};

const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    setCitySelect: (state) => {
      state.type = "city";
    },
    setDateSelect: (state) => {
      state.type = "date";
    },
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

export const { setCitySelect, setDateSelect, setModalOpen, setModalClose } =
  ModalSlice.actions;
export default ModalSlice;
