import Navbar from "../../components/Navbar/Navbar";
import SearchUser from "../../components/SearchUser/SearchUser";
import axios from "axios";
import { useState, useEffect } from "react";
import Users from "../../components/Users/Users";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

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

    const searchUsers = () => {
        axios
            .get(`https://api.github.com/users/${search}`)
            .then((res) => {
                console.log(res.data);
                setSearch(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <div>
            <Navbar />
            <SearchUser
                search={search}
                searchUsers={searchUsers}
                setSearch={setSearch}
            />
            <Users users={users} />
        </div>
    );
};

export default Home;
