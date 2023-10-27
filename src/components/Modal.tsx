import React from "react";
import styled from "styled-components";

function Modal() {
  return (
    <>
      <ModalDiv>
        <Header>
          <button>닫기</button>
        </Header>
        <Content>
          <p>서울특별시</p>
          <p>서울특별시</p>
          <p>서울특별시</p>
          <p>서울특별시</p>
          <p>서울특별시</p>
        </Content>
      </ModalDiv>
    </>
  );
}

export default Modal;

const ModalDiv = styled.div`
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
  padding: 2rem 3rem 3rem;
`;
