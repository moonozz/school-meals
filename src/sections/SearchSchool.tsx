import React, { useState, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Arrow } from "../images/arrow.svg";
// import { MealsResult } from "../store/modalType";
import {
  setModalCity,
  setModalOpen,
  setDate,
  setInputSchoolName,
  setSchoolSearchBtn,
  setSchoolCode,
  setSchoolName,
  setSearchMeals,
} from "../store/modalSlice";
import { ko } from "date-fns/esm/locale";
import { RootState } from "../store/store";

interface SchoolSearchResult {
ATPT_OFCDC_SC_CODE: string;
SCHUL_NM: string;
SD_SCHUL_CODE: string;
}

interface MealsResult {
  MLSV_YMD: string;
  DDISH_NM: string;
  MMEAL_SC_NM: string; // 조식, 중식, 석식
}

function SearchSchool() {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);
  const dateState = useSelector((state: RootState) => state.modal.date);
  
  const [school, setSchool] = useState<string>("");
  const [schoolSearchResult, setSchoolSearchResult] = useState<SchoolSearchResult[]>([]);
  const [datePick, setDatePick] = useState<Date>(new Date());
  const [dateString, setDateString] = useState<string>("");
  const [resultArr, setResultArr] = useState<MealsResult[]>([])
  
  useEffect(() => {
    setDateString(stringDate(new Date(datePick)));
    setDate(datePick.toDateString());
  }, [datePick, dateState, dateString, resultArr])

  // Datepicker 관련 함수
  const stringDate = (date: Date) => {
    return date.getFullYear().toString().slice(2, 4) + (date.getMonth() + 1).toString().padStart(2, "0");
  }

  const handleDateSelect = (date: Date) => {
    setDatePick(date)
    dispatch(setDate(date.toDateString()));
    setResultArr([]);
  }

  // 학교 이름 input 검색용 함수 및 axios
  const handleSchoolSearchBtn = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
      dispatch(setSchoolCode(""));
      dispatch(setSchoolName(""));
    }

    if (!modalState.cityName) {
      alert("지역을 선택해주세요.")
    } else if (!school) {
      alert("학교명을 입력해주세요.")
    } else {
      axios
        .get(`https://open.neis.go.kr/hub/schoolInfo?KEY=${process.env.REACT_APP_NICE_API_KEY}&Type=json&pIndex=1&pSize=1000&ATPT_OFCDC_SC_CODE=${modalState.cityCode}&SCHUL_NM=${school}`)
        .then((res) => {
          const schoolInfoAllData = res.data.schoolInfo[1].row
          dispatch(setSchoolSearchBtn(true));
          dispatch(setInputSchoolName(school));
          setSchoolSearchResult(schoolInfoAllData.length === 0 ? [] : schoolInfoAllData)
        })
        .catch((err) => {
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

  // 급식 검색 axios
  const handleSearchMeals = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

    if(!modalState.chooseSchoolCode) {
      alert("검색할 학교를 선택해주세요.")
      dispatch(setSearchMeals(false));
    } else {
      dispatch(setSearchMeals(true));

      axios
        .get(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.REACT_APP_NICE_API_KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=${modalState.cityCode}&SD_SCHUL_CODE=${modalState.chooseSchoolCode}&MLSV_YMD=${dateString}`)      
        .then((res) => {if (res.data && res.data.mealServiceDietInfo) {
            const filterLunch = res.data.mealServiceDietInfo[1].row.filter((item: MealsResult) => {
              return item.MMEAL_SC_NM.includes("중식")
            })
            setResultArr(filterLunch)
          } else {
            const ErrMsg = "검색결과가 없습니다."
            setResultArr([])
          }
        })
        .catch((err) => {
          alert(`${err}`)
        })
    }
  }

  // datepicker를 modal로 띄우게하는 시도하기
  // const handleDateModal = () => {
  //   dispatch(setModalDate());
  //   dispatch(setModalOpen());
  // };

  const handleCityModal = () => {
    dispatch(setModalCity());
    dispatch(setModalOpen());
  };

  const handleSchoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  }

  // 학교 선택 함수
  const handleSelectSchool = (name: string, code: string) => {
    dispatch(setSchoolName(name));
    dispatch(setSchoolCode(code));
  }

  return (
    <Section>
      <SearchSection>
        <h4>궁금한 날짜와 지역, 학교를 검색해주세요!</h4>
        <SearchForm>
          <SelectArea>
            <Select>
              <StyledDatePicker
                selected={datePick}
                onChange={handleDateSelect}
                dateFormat="yyyy년 MM월"
                locale={ko}
                showMonthYearPicker
              />
              <Arrow />
            </Select>
            <Select onClick={handleCityModal}>
              {
                !modalState.cityName ? 
                <span>지역을 선택해주세요</span> : <span>{modalState.cityName}</span>
              }
              <Arrow />
            </Select>
          </SelectArea>
          <Search>
            <input placeholder="학교명을 검색해주세요." value={school} onChange={handleSchoolName} onKeyDown={handleEnterKeypress}></input>
            <button onClick={handleSchoolSearchBtn}>검색</button>
          </Search>
        </SearchForm>
        {
          !modalState.schoolSearchBtn || schoolSearchResult.length === 0 ? 
            <></>
          :
            <SchoolSearchResult>
              <span>{`'${modalState.inputSchoolName}' 의 검색결과 ${schoolSearchResult.length}개`}</span>
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
            </SchoolSearchResult>
        }
        <Btn disabled={modalState.chooseSchoolCode.length === 0 ? true : false} onClick={handleSearchMeals}>급식 보기</Btn>
      </SearchSection>
      <ResultSection>
      {!modalState.searchMeals && resultArr.length === 0
        ? 
          <h4>학교를 선택하고 급식을 검색해주세요.</h4>
        :
        <>
          <h4>급식 검색 결과</h4>

          <ResultArea>
            <MealsUl>
              {
                resultArr.length === 0 
                  ? <p>검색 결과가 없습니다.</p>
                  :
                  <>
                  {resultArr.map((item) => {
                    const mealsDate = item.MLSV_YMD;
                    const mealsArr = item.DDISH_NM.split("<br/>");
                    const meals = item.DDISH_NM;
                    
                    return (
                      <Meal key={mealsDate}>
                        <Day>{mealsDate}</Day>
                        <ul>
                          {mealsArr.map((item) => {
                            const mealsSlice = (str: string) => {
                              return str.substring(0, str.indexOf(" "))
                            }
                            return (
                              <li>{mealsSlice(item)}</li>
                            )
                          })}
                        </ul>
                      </Meal>
                    )
                  })}
                  </>
                  
              }
            </MealsUl>
          </ResultArea>
        </>
      }
    </ResultSection>
    </Section>
  );
}

export default SearchSchool;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

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

const StyledDatePicker = styled(DatePicker) `
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.s};
`

const Search = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 3.2rem;
  margin: 0.5rem 0;
  padding: 0.5rem 0.5rem 0.5rem 2.4rem;
  input {
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  button {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    padding: 1.2rem 1.6rem;
    border-radius: 3.2rem;
    &:hover {
      background-color: ${({theme}) => theme.color.gray150}
    }
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

const SchoolSearchResult = styled.div`
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
      width: 0.4rem; 
      height: 10rem;
      background-color: none;
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
  color: ${props => props.disabled ? props.theme.color.hoverGray : props.theme.color.white};;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${props => props.disabled ? props.theme.color.disabledBlack : props.theme.color.black};
  cursor: ${props => props.disabled ? "auto" : "pointer"};
  &:hover {
    background-color: ${props => props.disabled ? "" : props.theme.color.gray150}
  }
  
  @media ${({ theme }) => theme.mobile} {
    width: 24rem;
    font-size: ${({ theme }) => theme.fontSize.r};
  }
`;

const ResultSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;

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

const ResultArea = styled.div`
  display: flex;
  width: 100%;
  max-width: 120rem;
`;

const MealsUl = styled.ul`
  width: 100%;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, auto));
  p {
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Meal = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightGray};
  border-radius: 3.2rem;
  padding: 2.4rem 1.2rem;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Day = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 800;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 1.6rem;
`;
