import React from "react";
import styled from "styled-components";

function SearchSchool() {
  return (
    <SearchSection>
      <h4>궁금한 날짜와 지역, 학교를 검색해주세요!</h4>
    </SearchSection>
  );
}

export default SearchSchool;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  /* max-width: 144rem; */
  background-color: ${({ theme }) => theme.color.lightMain};
  h4 {
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
    text-align: center;
  }

  @media ${({ theme }) => theme.display.tablet} {
    padding: 9rem 4.4rem;
    h4 {
      font-size: 2.4rem;
      margin-bottom: 5rem;
    }
  }
`;
