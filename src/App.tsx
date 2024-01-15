import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

import Main from "./sections/Main";
import SearchSchool from "./sections/SearchSchool";
import Result from "./sections/Result";
import Modal from "./components/Modal";

import { RootState } from "./store/store";

function App() {
  const modalState = useSelector((state: RootState) => state.modal.modal);

  // const [dateSelect, setModalDate] = useState<string>("");
  // const [citySelect, setModalCity] = useState<string>("");

  useEffect(() => {
    !modalState
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [modalState]);

  console.log(modalState);

  return (
    <SchoolMeal>
      {modalState ? null : (
        <ModalSection>
          <ModalBackground />
          <Modal
          // citySelect={citySelect}
          // dateSelect={dateSelect}
          // setModalDate={setModalDate}
          // setModalCity={setModalCity}
          />
          {/* <ModalBackground /> */}
        </ModalSection>
      )}
      <Main />
      <SearchSchool
      // citySelect={citySelect}
      // dateSelect={dateSelect}
      // setModalDate={setModalDate}
      // setModalCity={setModalCity}
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
`;
