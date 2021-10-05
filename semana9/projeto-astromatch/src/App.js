import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import MatchPage from "./pages/MatchPage/MatchPage";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    background-image: url("../../img/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: calc(2vmin + 4px);
  }

  button {
    cursor: pointer;
  }

  .img {
    position: absolute;
    background-image: url("../../img/img-match.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 310px;
    height: 183px;
    bottom: 195px;
    right: 185px;
  }

  @media screen and (max-width: 1240px) {
    .img {
      position: absolute;
      background-image: url("../../img/img-match.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 310px;
      height: 183px;
      bottom: 145px;
      right: 15px;
    }
  }

  @media screen and (max-width: 1084px) {
    .img {
      display: none;
    }
  }
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const choosePage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage changePage={changePage} />;
      case "matchPage":
        return <MatchPage changePage={changePage} />;
      default:
        return <HomePage />;
    }
  };

  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div>
      <GlobalStyle />
      {choosePage()}
      <div className="img"></div>
    </div>
  );
};

export default App;
