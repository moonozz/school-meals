import React from "react";
import styled from "styled-components";
import mainImg from "../data/mainImg";

function Main() {
  const mainImgArr = mainImg;
  // const IMG_URL = `${process.env.PUBLIC_URL}/assets/`;
  // console.log(mainImgArr[0]);
  // console.log(mainImgArr[1]);

  return (
    <MainSec>
      <Subtitle>바로 찾아보는 우리 학교 급식 정보</Subtitle>
      <FoodDiv>
        {/* <ImgDiv>
          <img
            src={IMG_URL + `${mainImg[0][0].url}`}
            alt={`${mainImg[0][0].name}`}
          />
          <img
            className="hidden"
            src={`${process.env.PUBLIC_URL}/assets/${mainImg[0][1].url}`}
            alt={`${mainImg[0][1].name}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/${mainImg[0][2].url}`}
            alt={`${mainImg[0][2].name}`}
          />
        </ImgDiv> */}
        {/* {mainImgArr} */}
        {/* <Animation> */}
        {mainImgArr.map((item) => {
          return (
            <ImgDiv>
              <img
                src={`${process.env.PUBLIC_URL}/assets/${item[0].url}`}
                alt={`${item[0].name}`}
              />
              <img
                className="hidden"
                src={`${process.env.PUBLIC_URL}/assets/${item[1].url}`}
                alt={`${item[1].name}`}
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/${item[2].url}`}
                alt={`${item[2].name}`}
              />
            </ImgDiv>
          );
        })}
        {/* </Animation> */}

        {/* <ImgDiv>
          {mainImgArr.map((item) => {
            return (
              <>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${item[0].url}`}
                  alt={`${item[0].name}`}
                />
                <img
                  className="hidden"
                  src={`${process.env.PUBLIC_URL}/assets/${item[1].url}`}
                  alt={`${item[1].name}`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${item[2].url}`}
                  alt={`${item[2].name}`}
                />
              </>
            );
          })}
        </ImgDiv> */}
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

  div {
    opacity: 0;
    overflow: hidden;
  }
  /* div:first-child {
    animation: img-animation 8s infinite;
  } */

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

  /* @keyframes show {
    0% {
      margin-top: -94rem;
      opacity: 0;
    }

    5% {
      margin-top: -75.2rem;
      opacity: 0;
    }
    20% {
      margin-top: -75.2rem;
      opacity: 0;
    }

    25% {
      margin-top: -56.4rem;
      opacity: 0;
    }
    40% {
      margin-top: -56.4rem;
      opacity: 0;
    }

    45% {
      margin-top: -37.6rem;
      opacity: 0;
    }
    60% {
      margin-top: -37.6rem;
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
      margin-top: 0rem;
      opacity: 1;
    }
    99% {
      margin-top: 0rem;
      opacity: 1;
    }

    100% {
      margin-top: 18.8rem;
      opacity: 0;
    }
  } */

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

const Animation = styled.section`
  /* div {
    opacity: 0;
    overflow: hidden;
  }
  div:first-child {
    animation: img-animation 8s infinite;
  } */
`;

const ImgDiv = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 8rem);
  padding: 4rem 0rem;
  /* margin-bottom: 100%; */
  display: flex;
  /* display: inline-flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-around; */
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
    height: 100%;
    padding: 0 9rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;
