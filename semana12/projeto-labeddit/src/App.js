import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #357DDD;
    --secondaryColor: #518fe1;
    --neutralColor: #D7E5F8;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: calc(2vmin + 4px);
    width: 100%;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: var(--primaryColor);
    color: #fff;
    cursor: pointer;
    padding: 8px 28px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 3px;
    border: none;
    outline: 0;
  }
`;

const App = () => {
  const token = localStorage.getItem("token");
  const [buttonSignOut, setButtonSignOut] = useState(
    token ? "Sign Out" : "Sign In"
  );

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header
        buttonSignOut={buttonSignOut}
        setButtonSignOut={setButtonSignOut}
      />
      <Router setButtonSignOut={setButtonSignOut} />
    </BrowserRouter>
  );
};

export default App;
