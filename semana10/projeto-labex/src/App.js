import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --primary-color: #6d64ff;
    --secondary-color: #ff6584;
    --tertiary-color: #3e3c56;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    font-size: calc(2vmin + 6px);
  }

  button {
    cursor: pointer;
  }
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const choosePage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage changePage={changePage} />;
      case "listTrips":
        return <Header changePage={changePage} />;
      default:
        return <HomePage changePage={changePage} />;
    }
  };

  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div>
      <GlobalStyle />
      {choosePage()}
    </div>
  );
};

export default App;
