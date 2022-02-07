import Header from "../../components/Header/Header";
import TableData from "../../components/TableData/TableData";
import Title from "../../components/Title/Title";
import { MainContainer } from "./styled";

const Home = () => {
    return (
        <div>
            <Header />
            <Title />

            <MainContainer>
                <TableData />
            </MainContainer>
        </div>
    );
};

export default Home;
