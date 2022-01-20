import React from "react";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home/Home";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Home />
            <Pagination />
        </div>
    );
};

export default App;
