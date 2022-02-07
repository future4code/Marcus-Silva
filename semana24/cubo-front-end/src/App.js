import GlobalState from "./context/global/GlobalState";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";

function App() {
    return (
        <GlobalState>
            <GlobalStyle />
            <Home />
        </GlobalState>
    );
}

export default App;
