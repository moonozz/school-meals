import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from "react-redux";
import {
  setDate,
} from "../store/modalSlice";
import { ko } from "date-fns/esm/locale";
import { RootState } from "../store/store";

function Calendar() {
  const dispatch = useDispatch();
  const dateState = useSelector((state: RootState) => state.modal.date);
  const modalState = useSelector((state: RootState) => state.modal);

  const handleDateChange = (date: Date) => {
    dispatch(setDate(date));
    console.log(date)
    console.log(modalState)
  }

  return (
      <StyledDatePicker
        selected={dateState}
        onChange={handleDateChange}
        dateFormat="yyyy년 MM월"
        locale={ko}
        showMonthYearPicker
      />
  );
}

export default Calendar;

const StyledDatePicker = styled(DatePicker) `
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.s};
`