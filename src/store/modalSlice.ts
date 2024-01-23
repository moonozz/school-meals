import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import ModalStore from "./store";
import ModalType from "./modalType";
// import { ReactNode } from "react";

const initialState: ModalType = {
  modal: true,
  modalType: "",
  cityName: "",
  cityCode: "",
  date: new Date(),
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
    setModalCity: (state) => {
      state.modalType = "city";
    },
    setModalDate: (state) => {
      state.modalType = "date";
    },
    setCityName: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
    setCityCode: (state, action: PayloadAction<string>) => {
      state.cityCode = action.payload;
    },
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    }
  },
});

export const { setModalOpen, setModalClose, setModalCity, setModalDate, setCityName, setCityCode, setDate} =
  ModalSlice.actions;
export default ModalSlice.reducer;
