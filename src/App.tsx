import React, { useState } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

import Main from "./sections/Main";
import SearchSchool from "./sections/SearchSchool";
import Result from "./sections/Result";
import Modal from "./components/Modal";

import { RootState } from "./store/store";

function App() {
  const modalState = useSelector((state: RootState) => state.modal.modal);

  const [dateSelect, setDateSelect] = useState<string>("");
  const [citySelect, setCitySelect] = useState<string>("");

  console.log(modalState);

  return (
    <SchoolMeal className={!modalState ? "" : "overflow-hidden"}>
      {modalState ? null : (
        <ModalSection>
          <ModalBackground />
          <Modal
            citySelect={citySelect}
            dateSelect={dateSelect}
            setDateSelect={setDateSelect}
            setCitySelect={setCitySelect}
          />
          {/* <ModalBackground /> */}
        </ModalSection>
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
  width: 100%;
  height: 100%;
`;

const ModalSection = styled.section`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  /* position: fixed; */
  /* bottom: 0; */
  /* left: 0; */
  /* z-index: 10; */
`;
