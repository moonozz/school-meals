import React from "react";
import styled from "styled-components";
import mainImg from "../data/mainImg";

function Main() {
  const mainImgArr = mainImg;

  return (
    <MainSec>
      <Subtitle>바로 찾아보는 우리 학교 급식 정보</Subtitle>
      <FoodDiv>
        <TextDiv>
          <h2>ya,</h2>
          <h2>점심 뭐야?</h2>
        </TextDiv>
        <AnimationDiv>
          {mainImgArr.map((item) => {
            return (
              <ImgDiv key={`${item[0].id}`}>
                <img
                  key={`${item[0].name}`}
                  src={`${process.env.PUBLIC_URL}/assets/${item[0].url}`}
                  alt={`${item[0].name}`}
                />
                <img
                  className="hidden"
                  key={`${item[1].name}`}
                  src={`${process.env.PUBLIC_URL}/assets/${item[1].url}`}
                  alt={`${item[1].name}`}
                />
                <img
                  key={`${item[2].name}`}
                  src={`${process.env.PUBLIC_URL}/assets/${item[2].url}`}
                  alt={`${item[2].name}`}
                />
              </ImgDiv>
            );
          })}
        </AnimationDiv>
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

  @media ${({ theme }) => theme.mobile} {
    width: 47rem;
    height: 66rem;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 92vw;
    max-width: 108.8rem;
    height: 46.4rem;
    border-radius: 23.2rem;
  }
`;

const AnimationDiv = styled.div`
  position: relative;
  width: 100%;
  height: 36rem;
  margin: auto;
  /* opacity: 0; */
  overflow: hidden;

  @media ${({ theme }) => theme.mobile} {
    height: 48rem;
  }
  @media ${({ theme }) => theme.desktop} {
    height: 24rem;
  }

  div:nth-child(1) {
    animation: show 5s linear infinite 0s;
  }
  div:nth-child(2) {
    animation: show 5s linear infinite 1s;
  }
  div:nth-child(3) {
    animation: show 5s linear infinite 2s;
  }
  div:nth-child(4) {
    animation: show 5s linear infinite 3s;
  }
  div:nth-child(5) {
    animation: show 5s linear infinite 4s;
  }

  @keyframes show {
    0% {
      margin-top: -28.8rem;
      opacity: 0;
    }

    5% {
      margin-top: 0rem;
      opacity: 1;
    }
    20% {
      margin-top: 0rem;
      opacity: 1;
    }

    25% {
      margin-top: -18.8rem;
      opacity: 0;
    }
    40% {
      margin-top: -18.8rem;
      opacity: 0;
    }

    45% {
      margin-top: -18.8rem;
      opacity: 0;
    }
    60% {
      margin-top: -18.8rem;
      opacity: 0;
    }

    65% {
      margin-top: -18.8rem;
      opacity: 0;
    }
    80% {
      margin-top: -18.8rem;
      opacity: 0;
    }

    85% {
      margin-top: -18.8rem;
      opacity: 0;
    }
    99% {
      margin-top: -18.8rem;
      opacity: 0;
    }

    100% {
      margin-top: 18.8rem;
      opacity: 0;
    }
  }
`;

const ImgDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0;  

  img {
    display: inline-block;
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
    width: calc(100% - 18rem);
    height: 24rem;
    padding: 0 9rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 8.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.color.black};
  h2:first-child {
    position: absolute;
    top: -15%;
    left: 0;
  }

  h2:last-child {
    position: absolute;
    top: 94%;
    right: 0;
    font-size: 4rem;
    text-align: right;
  }

  @media ${({ theme }) => theme.mobile} {
    h2 {
      font-size: 12.2rem;
    }
    h2:last-child {
      font-size: 6.2rem;
    }
  }
  @media ${({ theme }) => theme.desktop} {
    h2 {
      top: -20%;
    }
    h2:last-child {
      top: 90%;
    }
  }
`;
