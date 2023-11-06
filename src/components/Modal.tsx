import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>;
  setDateSelect: Dispatch<SetStateAction<boolean>>;
  setCitySelect: Dispatch<SetStateAction<boolean>>;
  // modal: boolean;
  dateSelect: boolean;
  citySelect: boolean;
}

function Modal(props: Props) {
  const modalClose = () => {
    props.setModal(false);
    props.setDateSelect(false);
    props.setCitySelect(false);
  };

  return (
    <>
      <ModalDiv>
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
      </ModalDiv>
    </>
  );
}

export default Modal;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  display: flex;
  max-width: 71rem;
  width: 100%;
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
