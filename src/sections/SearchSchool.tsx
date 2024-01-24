import React, { useState, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../components/Calendar";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import {
  setModalCity,
  setModalDate,
  setModalOpen,
  setInputSchoolName,
  setSchoolSearchBtn,
  setSchoolCode,
  setSchoolName,
} from "../store/modalSlice";
import { RootState } from "../store/store";

// interface Props {
//   setModalDate: Dispatch<SetStateAction<string>>;
//   setModalCity: Dispatch<SetStateAction<string>>;
//   dateSelect: string;
//   citySelect: string;
// }

interface SchoolSearchResult {
ATPT_OFCDC_SC_CODE: string;
SCHUL_NM: string;
SD_SCHUL_CODE: string;
}

function SearchSchool() {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);
  const inputSchool = useSelector((state: RootState) => state.modal.inputSchoolName)
  const searchBtnState = useSelector((state: RootState) => state.modal.schoolSearchBtn)
  
  const [school, setSchool] = useState<string>("");
  const [schoolSearchResult, setSchoolSearchResult] = useState<SchoolSearchResult[]>([]);
  // const resultLength: number = schoolSearchResult.length;
  // const Console = modalState.cityCode

  const handleSchoolSearchBtn = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault(); // 기본 동작 막기
    }

    if (!modalState.cityName) {
      alert("지역을 선택해주세요.")
    } else if (!school) {
      alert("학교명을 입력해주세요.")
    } else {
      // search bar에 학교 검색하기
      // 링크 https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17020190531110010104913&infSeq=2
      axios
        .get(`https://open.neis.go.kr/hub/schoolInfo?KEY=${process.env.REACT_APP_NICE_API_KEY}&Type=json&pIndex=1&pSize=1000&ATPT_OFCDC_SC_CODE=${modalState.cityCode}&SCHUL_NM=${school}`)
        .then((res) => {
          // console.log('성공')
          const schoolInfoAllData = res.data.schoolInfo[1].row
          dispatch(setSchoolSearchBtn(true));
          dispatch(setInputSchoolName(school));
          setSchoolSearchResult(schoolInfoAllData.length === 0 ? [] : schoolInfoAllData)
          // console.log(schoolSearchResult)
        })
        .catch((err) => {
          // console.log('실패')
          alert("입력하신 학교명을 다시 확인해주세요.")
        })
    }
  }

  const handleEnterKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault();
      handleSchoolSearchBtn()
      dispatch(setSchoolSearchBtn(true));
    }
  }

  // datepicker를 modal로 띄우게하는 시도하기
  // const handleDateModal = () => {
  //   dispatch(setModalDate());
  //   dispatch(setModalOpen());
  // };

  const handleDatePicker = () => {
    dispatch(setModalDate());
  }

  const handleCityModal = () => {
    dispatch(setModalCity());
    dispatch(setModalOpen());
  };

  const handleSchoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  }

  const handleSelectSchool = (name: string, code: string) => {
    dispatch(setSchoolName(name));
    dispatch(setSchoolCode(code));
  }


  return (
    <SearchSection>
      <h4>궁금한 날짜와 지역, 학교를 검색해주세요!</h4>
      <SearchForm>
        <SelectArea>
          <Select onClick={handleDatePicker}>
          {/* <Select onClick={handleDateModal}> */}
            <Calendar />
            <Arrow />
          </Select>
          <Select onClick={handleCityModal}>
            {
              !modalState.cityName ? 
              <span>지역을 선택해주세요</span> : <span>{modalState.cityName}</span>
            }
            {/* <img src={Arrow} alt="select arrow image" /> */}
            <Arrow />
          </Select>
        </SelectArea>
        <Search>
          {/* <input placeholder="학교명을 검색해주세요." value={inputSchool.length === 0 ? "" : inputSchool} onChange={handleSchoolName} onKeyDown={handleEnterKeypress}></input> */}
          <input placeholder="학교명을 검색해주세요." value={school} onChange={handleSchoolName} onKeyDown={handleEnterKeypress}></input>
          <button onClick={handleSchoolSearchBtn}>검색</button>
        </Search>
      </SearchForm>
      {
        !searchBtnState || schoolSearchResult.length === 0 ? 
          <></>
        :
          <Result>
            {/* <span>'덕' 의 검색결과 11개</span> */}
            <span>{`'${inputSchool}' 의 검색결과 ${schoolSearchResult.length}개`}</span>
            <ul>
              {schoolSearchResult.map((item) => {
                const schoolName = item.SCHUL_NM;
                const schoolCode = item.SD_SCHUL_CODE;
                const activeLi = schoolName === modalState.chooseSchoolName

                return (
                  <li key={schoolCode} className={activeLi ? "activeLi" : ""} onClick={() => {handleSelectSchool(schoolName, schoolCode)}}>
                    {activeLi? `🟠 ${schoolName}` : schoolName}
                  </li>
                )
              })}
            </ul>
          </Result>
      }
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
    width: 60%;
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
  @media ${({ theme }) => theme.desktop} {
    margin: 0;
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
    width: 40%;
    margin: 0;
  }
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  margin-top: 1.6rem;
  width: 100%;
  height: 21rem;
  max-width: 120rem;
  max-height: 21rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  span {
    height: 3rem;
    margin: 2rem 3.2rem 0.4rem;
    font-size: ${({theme}) => theme.fontSize.xs};
    color: ${({theme}) => theme.color.gray100}
  }
  ul {
    width: calc(100% - 2rem);
    height: calc(17.8rem - 3.2rem);
    max-height: calc(17.8rem - 3.2rem);

    padding: 0rem 1rem 1rem;
    overflow: auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      /* display: flex; */
      width: 0.4rem; 
      height: 10rem;
      background-color: none;
      /* margin-right: 10rem; */
    }
    &::-webkit-scrollbar-track {
      background-color: none
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.4rem;
      background-color: ${({theme}) => theme.color.gray100}
    }
  }
  li {
    padding: 1rem 2.4rem;
    cursor: pointer;
    &:hover {
      color: ${({theme}) => theme.color.gray100}
    }
    &.activeLi {
      font-weight: 900;
      &:hover {
        color: ${({theme}) => theme.color.black}
      }
    }
  }


  @media ${({ theme }) => theme.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`

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
