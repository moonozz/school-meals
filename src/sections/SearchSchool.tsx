import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import Arrow from "../images/arrow.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { setModalOpen } from "../store/modalSlice";
import { RootState } from "../store/store";

interface Props {
  setDateSelect: Dispatch<SetStateAction<string>>;
  setCitySelect: Dispatch<SetStateAction<string>>;
  dateSelect: string;
  citySelect: string;
}

function SearchSchool(props: Props) {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);

  const handleDateModal = () => {
    dispatch(setModalOpen());
  };

  const handleCityModal = () => {
    dispatch(setModalOpen());
  };

  return (
    <SearchSection>
      <h4>궁금한 날짜와 지역, 학교를 검색해주세요!</h4>
      <SearchForm>
        <SelectArea>
          <Select onClick={handleDateModal}>
            <span>23년 10월</span>
            {/* <img src={Arrow} alt="select arrow image" /> */}
            <Arrow />
          </Select>
          <Select onClick={handleCityModal}>
            <span>서울특별시</span>
            {/* <img src={Arrow} alt="select arrow image" /> */}
            <Arrow />
          </Select>
        </SelectArea>
        <Search>
          <input placeholder="학교명을 검색해주세요."></input>
          <button>검색</button>
        </Search>
      </SearchForm>
      <Result>
        <ul>
          <li>덕수고등학교</li>
          <li>덕수고등학교</li>
          <li>덕수고등학교</li>
        </ul>
      </Result>
      <Btn>급식 보기</Btn>
    </SearchSection>
  );
}

export default SearchSchool;

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.color.lightMain};
  h4 {
    font-size: ${({ theme }) => theme.fontSize.r};
    font-weight: 800;
    margin-bottom: 2.4rem;
    text-align: center;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 9rem 4.4rem;
    h4 {
      font-size: ${({ theme }) => theme.fontSize.l};
      margin-bottom: 5rem;
    }
  }
`;

const SearchForm = styled.div`
  display: flex;
  width: 100%;
  max-width: 120rem;
  flex-direction: column;
  @media ${({ theme }) => theme.desktop} {
    flex-direction: row;
    gap: 1.6rem;
  }
`;

const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xs};
  width: 100%;
  @media ${({ theme }) => theme.mobile} {
    font-size: ${({ theme }) => theme.fontSize.s};
    flex-direction: row;
    gap: 1rem;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 50%;
  }
`;

const Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding: 1.4rem 2.4rem;
  border-radius: 3.2rem;
  margin: 0.5rem 0;
  @media ${({ theme }) => theme.mobile} {
    margin: 0.8rem 0;
    flex-grow: 1;
  }
`;

const Search = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  margin: 0.5rem 0;
  padding: 0.5rem 0.5rem 0.5rem 2.4rem;
  input {
    width: 70%;
    /* padding: 1.4rem 2.4rem; */
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  button {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    padding: 1.2rem 1.6rem;
    border-radius: 3.2rem;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 0.6rem 0.6rem 0.6rem 2.4rem;
    input {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  @media ${({ theme }) => theme.desktop} {
    width: 50%;
  }
`;

const Result = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  margin-top: 1.6rem;
  width: 100%;
  max-width: 120rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  ul {
    padding: 1.6rem 1rem;
  }
  li {
    padding: 1.6rem 2.4rem;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Btn = styled.button`
  width: 100%;
  border-radius: 3.2rem;
  margin-top: 2.4rem;
  padding: 1.6rem 0%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  @media ${({ theme }) => theme.mobile} {
    width: 24rem;
    font-size: ${({ theme }) => theme.fontSize.r};
  }
`;
