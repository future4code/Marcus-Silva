import Navbar from "../../components/Navbar/Navbar";
import SearchUser from "../../components/SearchUser/SearchUser";
import axios from "axios";
import { useState, useEffect } from "react";
import Users from "../../components/Users/Users";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.github.com/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <SearchUser />
            <Users users={users} />
        </div>
    );
};

export default Home;
