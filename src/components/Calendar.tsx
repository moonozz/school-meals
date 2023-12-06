import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

function Calendar() {
  const [selectMonth, setSelectMonth] = useState<Date | null>(new Date());
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  // const renderMonthContent = (month:number, shortMonth:string, longMonth:string) => {
  //   const tooltipText = `Tooltip for month: ${longMonth}`;
  //   return <span title={tooltipText}>{shortMonth}</span>;
  // };

  return (
    <DatePicker
      selected={selectMonth}
      onChange={(date) => setSelectMonth(date)}
      // renderMonthContent={renderMonthContent}
      dateFormat="MM/yyyy"
      locale={ko}
      showMonthYearPicker
    />
  );
}

export default Calendar;
