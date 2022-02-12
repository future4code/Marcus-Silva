import Navbar from "../../components/Navbar/Navbar";
import SearchUser from "../../components/SearchUser/SearchUser";
import { ContainerCards } from "../../components/Users/styled";
import Users from "../../components/Users/Users";

const Home = () => {
    return (
        <div>
            <Navbar />
            <SearchUser />
            <Users />
        </div>
    );
};

export default Home;
