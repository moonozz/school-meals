import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../store/modalSlice";
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

  const modalClose = () => {
    // props.setModal(false);
    // props.setDateSelect(false);
    // props.setCitySelect(false);
    dispatch(setModalClose());
    console.log(modalState);
  };

  return (
    <>
      <ModalContainer>
        <Header>
          <button onClick={modalClose}>닫기</button>
        </Header>
        {props.dateSelect ? (
          <Content>
            <p>dateSelect</p>
          </Content>
        ) : (
          ""
        )}
        {props.citySelect ? (
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
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  max-width: 71rem;
  width: 100%;
  position: absolute;
  z-index: 1;
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
