import React, { useState } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

import Main from "./sections/Main";
import SearchSchool from "./sections/SearchSchool";
import Result from "./sections/Result";
import Modal from "./components/Modal";

import { RootState } from "./store/store";

function App() {
  const modalState = useSelector((state: RootState) => state.modal);

  const [dateSelect, setDateSelect] = useState<string>("");
  const [citySelect, setCitySelect] = useState<string>("");

  console.log(modalState);

  return (
    <SchoolMeal>
      {modalState.modal ? (
        ""
      ) : (
        <>
          <ModalBackground />
          <Modal
            citySelect={citySelect}
            dateSelect={dateSelect}
            setDateSelect={setDateSelect}
            setCitySelect={setCitySelect}
          />
        </>
      )}
      <Main />
      <SearchSchool
        citySelect={citySelect}
        dateSelect={dateSelect}
        setDateSelect={setDateSelect}
        setCitySelect={setCitySelect}
      />
      <Result />
    </SchoolMeal>
  );
}

export default App;

const SchoolMeal = styled.div`
  position: relative;
`;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;
