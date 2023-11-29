import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  setCitySelect,
  setDateSelect,
  setModalClose,
} from "../store/modalSlice";
import { RootState } from "../store/store";

interface Props {
  setDateSelect: Dispatch<SetStateAction<string>>;
  setCitySelect: Dispatch<SetStateAction<string>>;
  dateSelect: string;
  citySelect: string;
}

function Modal(props: Props) {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);
  // const modalSelect = useSelector((state: RootState) => state.modal.type)

  const modalClose = () => {
    // props.setModal(false);
    // props.setDateSelect(false);
    // props.setCitySelect(false);
    dispatch(setModalClose());
    console.log(modalState.modal);
  };

  return (
    <>
      <ModalContainer>
        <Header>
          <button onClick={modalClose}>닫기</button>
        </Header>
        {modalState.type === "date" ? (
          <Content>
            <p>dateSelect</p>
          </Content>
        ) : (
          ""
        )}
        {modalState.type === "city" ? (
          <Content>
            <p>서울특별시</p>
            <p>서울특별시</p>
            <p>서울특별시</p>
            <p>서울특별시</p>
            <p>서울특별시</p>
          </Content>
        ) : (
          ""
        )}
      </ModalContainer>
    </>
  );
}

export default Modal;
const ModalContainer = styled.div`
  /* position: absolute; */
  position: fixed;
  top: 50vh;
  left: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  max-width: 71rem;
  /* z-index: 10; */
`;

const Header = styled.div`
  padding: 1rem 1rem 0rem;
  display: flex;
  justify-content: end;
`;

const Content = styled.div`
  display: flex;
  padding: 2rem 3rem 3rem;
`;
