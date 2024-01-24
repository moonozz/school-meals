import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import ModalStore from "./store";
import ModalType from "./modalType";
// import { ReactNode } from "react";

const initialState: ModalType = {
  modal: true,
  modalType: "",
  cityName: "",
  cityCode: "",
  date: new Date().toLocaleDateString(),
  // date: "",
  inputSchoolName: "",
  schoolSearchBtn: false,
  chooseSchoolName: "",
  chooseSchoolCode: "",
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
    setModalSchool: (state) => {
      state.modalType = "schoolname";
    },
    setCityName: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
    setCityCode: (state, action: PayloadAction<string>) => {
      state.cityCode = action.payload;
    },
    // setDate: (state, action: PayloadAction<Date>) => {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setInputSchoolName: (state, action: PayloadAction<string>) => {
      state.inputSchoolName = action.payload;
    },
    setSchoolSearchBtn: (state, action: PayloadAction<boolean>) => {
      state.schoolSearchBtn = action.payload;
    },
    setSchoolName: (state, action: PayloadAction<string>) => {
      state.chooseSchoolName = action.payload;
    },
    setSchoolCode: (state, action: PayloadAction<string>) => {
      state.chooseSchoolCode = action.payload;
    },
  },
});

export const { setModalOpen, setModalClose, setModalCity, setModalDate, setModalSchool, setCityName, setCityCode, setDate, setInputSchoolName, setSchoolSearchBtn, setSchoolName, setSchoolCode} =
  ModalSlice.actions;
export default ModalSlice.reducer;
