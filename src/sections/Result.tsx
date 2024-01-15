import React from "react";
import styled from "styled-components";

function Result() {
  return (
    <ResultSection>
      <h4>00년 00월 00고등학교 급식표</h4>
      <ResultArea>
        <MealsUl>
          <Meal>
            <Day>10.01(월)</Day>
            <ul>
              <li>혼합잡곡밥</li>
              <li>사골떡국</li>
              <li>제육볶음</li>
              <li>두부부침&양념장</li>
              <li>배추겉절이</li>
              <li>바나나우유</li>
              <li>고구마순볶음</li>
            </ul>
          </Meal>
          <Meal>
            <Day>10.01(월)</Day>
            <ul>
              <li>혼합잡곡밥</li>
              <li>사골떡국</li>
              <li>제육볶음</li>
              <li>두부부침&양념장</li>
              <li>배추겉절이</li>
              <li>바나나우유</li>
              <li>고구마순볶음</li>
            </ul>
          </Meal>
          <Meal>
            <Day>10.01(월)</Day>
            <ul>
              <li>혼합잡곡밥</li>
              <li>사골떡국</li>
              <li>제육볶음</li>
              <li>두부부침&양념장</li>
              <li>배추겉절이</li>
              <li>바나나우유</li>
              <li>고구마순볶음</li>
            </ul>
          </Meal>
          <Meal>
            <Day>10.01(월)</Day>
            <ul>
              <li>혼합잡곡밥</li>
              <li>사골떡국</li>
              <li>제육볶음</li>
              <li>두부부침&양념장</li>
              <li>배추겉절이</li>
              <li>바나나우유</li>
              <li>고구마순볶음</li>
            </ul>
          </Meal>
          <Meal>
            <Day>10.01(월)</Day>
            <ul>
              <li>혼합잡곡밥</li>
              <li>사골떡국</li>
              <li>제육볶음</li>
              <li>두부부침&양념장</li>
              <li>배추겉절이</li>
              <li>바나나우유</li>
              <li>고구마순볶음</li>
            </ul>
          </Meal>
          <Meal>
            <Day>10.01(월)</Day>
            <ul>
              <li>혼합잡곡밥</li>
              <li>사골떡국</li>
              <li>제육볶음</li>
              <li>두부부침&양념장</li>
              <li>배추겉절이</li>
              <li>바나나우유</li>
              <li>고구마순볶음</li>
            </ul>
          </Meal>
          <Meal>
            <Day>10.01(월)</Day>
            <ul>
              <li>혼합잡곡밥</li>
              <li>사골떡국</li>
              <li>제육볶음</li>
              <li>두부부침&양념장</li>
              <li>배추겉절이</li>
              <li>바나나우유</li>
              <li>고구마순볶음</li>
            </ul>
          </Meal>
        </MealsUl>
      </ResultArea>
    </ResultSection>
  );
}

export default Result;

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
