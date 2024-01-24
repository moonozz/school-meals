import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

import Main from "./sections/Main";
import SearchSchool from "./sections/SearchSchool";
import Result from "./sections/Result";
import Modal from "./components/Modal";

import { RootState } from "./store/store";

function App() {
  const modalState = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    !modalState.modal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [modalState.modal]);

  // console.log(modalState.modal);

  return (
    <SchoolMeal>
      {modalState.modal ? null : (
        <ModalSection>
          <ModalBackground />
          <Modal />
        </ModalSection>
      )}
      <Main />
      <SearchSchool />
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
