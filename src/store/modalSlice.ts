import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ModalStoreType} from "./modalType";

const initialState: ModalStoreType = {
  modal: true,
  modalType: "",
  cityName: "",
  cityCode: "",
  date: new Date().toDateString(),
  inputSchoolName: "",
  schoolSearchBtn: false,
  chooseSchoolName: "",
  chooseSchoolCode: "",
  searchMeals: false,
};

const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    setModalOpen: (state) => {
      state.modal = false;
    },
    setModalClose: (state) => {
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
    setSearchMeals: (state, action: PayloadAction<boolean>) => {
      state.searchMeals = action.payload;
    },
  },
});

export const { setModalOpen, setModalClose, setModalCity, setModalDate, setModalSchool, setCityName, setCityCode, setDate, setInputSchoolName, setSchoolSearchBtn, setSchoolName, setSchoolCode, setSearchMeals } =
  ModalSlice.actions;
export default ModalSlice.reducer;
