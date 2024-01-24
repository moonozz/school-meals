import React, { useEffect, SetStateAction } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import cityCodeKey from "../data/CityCodeKey";
import {
  setModalCity,
  setModalDate,
  setModalClose,
  setCityName,
  setCityCode,
  setDate,
  setInputSchoolName,
} from "../store/modalSlice";
import { RootState } from "../store/store";

// interface Props {
//   setModalDate: Dispatch<SetStateAction<string>>;
//   setModalCity: Dispatch<SetStateAction<string>>;
//   dateSelect: string;
//   citySelect: string;
// }

function Modal() {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);
  // const allState = useSelector((state: RootState) => state.modal.modalType);
  const cityNameState = useSelector((state: RootState) => state.modal.cityName);
  // const cityCodeState = useSelector((state: RootState) => state.modal.cityCode);
  // const inputSchool = useSelector((state: RootState) => state.modal.inputSchoolName)

  const modalClose = () => {
    // props.setModal(false);
    // props.setModalDate(false);
    // props.setModalCity(false);
    dispatch(setModalClose());
    console.log(modalState.modal);
  };

  const handleCity = (name: string, code: string) => {
    dispatch(setCityName(name));
    dispatch(setCityCode(code));
    dispatch(setInputSchoolName(""))
    dispatch(setModalClose());
  }

  const handleDate = (date: Date) => {
    dispatch(setDate(date))
    dispatch(setModalClose());
  }

  return (
    <>
      <ModalContainer>
        <Header>
          <CloseBtnArea onClick={modalClose} />
        </Header>
        {modalState.modalType === "date" ? (
          <Content>
            {/* <Calendar /> */}
          </Content>
        ) : (
          ""
        )}
        {modalState.modalType === "city" ? (
          <Content>
            {cityCodeKey.map((item) => {
              const cityName = Object.keys(item)[0]
              // const cityNameCode = JSON.stringify(Object.values(item))
              const cityNameCode = Object.values(item)[0]
              const activeBtn = cityNameState === cityName
              
              return (
                <button className={activeBtn ? "activeBtn" : ""} key={cityNameCode[0]} onClick={() => handleCity(cityName, cityNameCode)}>{cityName}</button>
                // <button className={activeBtn ? "activeBtn" : ""} key={cityNameCode[0]} >{cityName}</button>
              )
            })}
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
    &.activeBtn {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
