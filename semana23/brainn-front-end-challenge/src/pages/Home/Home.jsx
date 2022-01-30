import { Container } from "./styled";
import Bg_Web from "../../assets/Images/bg_web.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import RandomNumbers from "../../components/RandomNumbers/RandomNumbers";

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
            <RandomNumbers />
        </Container>
    );
};

export default Home;
