import { Container } from "./styled";
import Bg_Web from "../../assets/Images/bg_web.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import SortNumbers from "../../components/SortNumbers/SortNumbers";

const Home = () => {
    return (
        <Container
            style={{
                backgroundImage: `url(${Bg_Web})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
            }}
        >
            <Dropdown />
            <SortNumbers />
        </Container>
    );
};

export default Home;
