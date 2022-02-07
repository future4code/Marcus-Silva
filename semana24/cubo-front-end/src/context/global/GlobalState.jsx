import { GlobalContext } from "./GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";

const GlobalState = ({ children }) => {
    const [users, requestUser] = useRequestData(
        [],
        "https://cubo-back-end.herokuapp.com/user/all"
    );

    const states = { users };
    const request = { requestUser };

    return (
        <GlobalContext.Provider value={{ states, request }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
