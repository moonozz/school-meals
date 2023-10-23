import React from "react";
import styled from "styled-components";
import mainImg from "../data/mainImg";

function Main() {
  return (
    <MainSec>
      <Subtitle>바로 찾아보는 우리 학교 급식 정보</Subtitle>
      <FoodDiv>
        <ImgDiv>
          <img
            src={`${process.env.PUBLIC_URL}/assets/${mainImg[0].url}`}
            alt={`${mainImg[0].name}`}
          />
          <img
            className="hidden"
            src={`${process.env.PUBLIC_URL}/assets/${mainImg[1].url}`}
            alt={`${mainImg[1].name}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/${mainImg[2].url}`}
            alt={`${mainImg[2].name}`}
          />
        </ImgDiv>
        <h2>ya,</h2>
        <h2>점심 뭐야?</h2>
      </FoodDiv>
    </MainSec>
  );
}

export default Main;

const MainSec = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.main};
`;

const Subtitle = styled.p`
  margin-bottom: 6rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.8rem;
  }
`;

const FoodDiv = styled.div`
  position: relative;
  display: flex;
  width: 26.2rem;
  height: 48.4rem;
  background-color: ${({ theme }) => theme.color.lightMain};
  border-radius: 36.2rem;
  h2 {
    position: absolute;
    top: -15%;
    left: 0;
    font-size: 8.4rem;
  }
  h2:last-child {
    top: 94%;
    right: 0;
    font-size: 4rem;
    text-align: right;
  }
  font-weight: 800;
  color: ${({ theme }) => theme.color.black};
  @media ${({ theme }) => theme.mobile} {
    width: 47rem;
    height: 66rem;
    h2 {
      font-size: 12.2rem;
    }
    h2:last-child {
      font-size: 6.2rem;
    }
  }
  @media ${({ theme }) => theme.desktop} {
    width: 92vw;
    max-width: 108.8rem;
    height: 46.4rem;
    border-radius: 23.2rem;
    h2 {
      top: -20%;
    }
    h2:last-child {
      top: 90%;
    }
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img {
    width: 18.8rem;
    height: 18.8rem;
  }
  @media ${({ theme }) => theme.mobile} {
    img {
      width: 25rem;
      height: 25rem;
    }
  }
  @media ${({ theme }) => theme.desktop} {
    padding: 0 9rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;
