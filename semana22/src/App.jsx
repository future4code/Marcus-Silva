import React from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home/Home";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Home />
        </div>
    );
};

export default App;