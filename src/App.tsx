import Main from "./sections/Main";
import SearchSchool from "./sections/SearchSchool";
import Result from "./sections/Result";
import styled from "styled-components";

function App() {
  return (
    <SchoolMeal>
      <Main />
      <SearchSchool />
      <Result />
    </SchoolMeal>
  );
}

export default App;

const SchoolMeal = styled.div`
  position: relative;
`;
