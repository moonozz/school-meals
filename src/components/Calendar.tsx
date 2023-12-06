import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

function Calendar() {
  const [selectMonth, setSelectMonth] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={selectMonth}
      onChange={(date: Date) => setSelectMonth(date)}
      dateFormat="MM/yyyy"
      locale={ko}
      showMonthYearPicker
    />
  );
}

export default Calendar;
