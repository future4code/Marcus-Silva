import Header from "../../components/Header/Header";
import PieChart from "../../components/PieChart/PieChart";
import TableData from "../../components/TableData/TableData";
import Title from "../../components/Title/Title";
import { MainContainer } from "./styled";
import { PieChartContainer } from "../../components/PieChart/styled";
import { SectionTableContainer } from "../../components/TableData/styled";

const Home = () => {
    return (
        <div>
            <Header />
            <Title />

            <MainContainer>
                <SectionTableContainer>
                    <TableData />
                </SectionTableContainer>

                <PieChartContainer>
                    <PieChart />
                </PieChartContainer>
            </MainContainer>
        </div>
    );
};

export default Home;
