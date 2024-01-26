import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }
  body, input, button {
    font-family: 'GmarketSans', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  h1, h2 {
    margin: 0;
  }
  dl,
  dd,
  p {
    margin: 0;
  }
  button,
  input {
    appearance: none;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border-radius: 0;
  }

  button {
    cursor: pointer;
  }
  em {
    font-style: normal;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }
  img {
    vertical-align: top;
  }
  fieldset {
    border: 0 none;
    margin: 0;
    padding: 0;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: ${({ theme }) => theme.color.gray100}
  }

  .hidden {
    display: none !important;
    @media ${({ theme }) => theme.desktop} {
      display: block !important;
    }
  }
  
  /* .react-datepicker-wrapper {
    width: 100%;
    font-size: ${({theme}) => theme.fontSize.s};
    @media ${({ theme }) => theme.mobile} {
      font-size: ${({theme}) => theme.fontSize.xs} !important;
    }
  } */

  .react-datepicker__triangle  {
    transform: translate3d(12.2rem, 0px, 0px) !important;
    ::before {
      border-bottom-color: ${({theme}) => theme.color.black} !important
    }
    ::after {
      border-bottom-color: ${({theme}) => theme.color.black} !important
    }
  }

  .react-datepicker-popper {
    width: calc(100% - 9rem); // 왜 모바일에 적용되지??
    min-width: calc(20rem - 6rem);

    @media ${({ theme }) => theme.mobile} {
      width: calc(50% - 6rem); // 왜 태블릿이랑 pc로 적용되지?
    }
  }

  .react-datepicker {
    width: 100%;
    border-radius: 1rem;
    button {
      margin-top: 0.2rem;
    }
  }

  .react-datepicker__header {
    background-color: ${({theme}) => theme.color.black};
    border-radius: 1rem 1rem 0 0!important;
  }
  
  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    color: ${({theme}) => theme.color.white};
    font-size: ${({theme}) => theme.fontSize.xs};
  }
  
  .react-datepicker__month-container {
    width: 100%;
    font-size: ${({theme}) => theme.fontSize.xs};
  }

  .react-datepicker__month-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__month .react-datepicker__month-text, .react-datepicker__month .react-datepicker__quarter-text {
    flex-grow: 1;
    padding: 0.5rem 1rem;
  }

  .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
    background-color: ${({theme}) => theme.color.black};
    color: ${({theme}) => theme.color.main};
    font-weight: bold;
    border-radius: 3rem;
  }

  .react-datepicker__day--keyboard-selected:hover, .react-datepicker__month-text--keyboard-selected:hover, .react-datepicker__quarter-text--keyboard-selected:hover, .react-datepicker__year-text--keyboard-selected:hover {
    background-color: ${({theme}) => theme.color.gray150}
  }

  .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
    border-radius: 3rem;
  }
`;
