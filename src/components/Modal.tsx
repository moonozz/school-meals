import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  setCitySelect,
  setDateSelect,
  setModalClose,
} from "../store/modalSlice";
import { RootState } from "../store/store";

// interface Props {
//   setDateSelect: Dispatch<SetStateAction<string>>;
//   setCitySelect: Dispatch<SetStateAction<string>>;
//   dateSelect: string;
//   citySelect: string;
// }

function Modal() {
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
          <CloseBtnArea onClick={modalClose} />
        </Header>
        {modalState.type === "date" ? (
          <Content>
            <p>dateSelect</p>
            <Calendar />
          </Content>
        ) : (
          ""
        )}
        {modalState.type === "city" ? (
          <Content>
            <button>서울특별시</button>
            <button>서울특별시</button>
            <button>서울특별시</button>
            <button>서울특별시</button>
            <button>서울특별시</button>
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
  top: 50%;
  left: 50%;
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  max-width: 70rem;
  transform: translate(-50%, -50%)
  /* z-index: 10; */
`;

const Header = styled.div`
  padding: 1rem 1rem 0rem;
  display: flex;
  justify-content: end;
`;

const CloseBtnArea = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    border-bottom: 0.2rem solid ${({ theme }) => theme.color.black};
    width: 2.4rem;
    top: 50%;
    left: 25%;
    transform: rotateZ(-45deg);
  }

  &::after {
    content: "";
    position: absolute;
    border-bottom: 0.2rem solid ${({ theme }) => theme.color.black};
    width: 2.4rem;
    top: 50%;
    left: 25%;
    transform: rotateZ(45deg);
  }
`;

const Content = styled.div`
  display: flex;
  padding: 2rem 3rem 2rem;
  flex-wrap: wrap;
  button {
    font-size: ${({ theme }) => theme.fontSize.xs};
    background-color: ${({ theme }) => theme.color.lightGray};
    padding: 1.4rem 1.6rem;
    border-radius: 3.2rem;
    margin: 0 1rem 1rem 0;
    &:hover {
      background-color: ${({ theme }) => theme.color.hoverGray};
    }
  }
`;
