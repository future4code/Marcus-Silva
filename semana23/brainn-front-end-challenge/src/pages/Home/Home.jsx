import { Container } from "./styled";
import Bg_Web from "../../assets/Images/bg_web.svg";
import Dropdown from "../../components/Dropdown/Dropdown";

const Home = () => {
    return (
        <Container
            style={{
                backgroundImage: `url(${Bg_Web})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Dropdown />
        </Container>
    );
};

export default Home;
