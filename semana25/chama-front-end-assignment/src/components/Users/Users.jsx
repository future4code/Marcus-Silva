import axios from "axios";
import { useEffect, useState } from "react";
import { Cards, ContainerCards, Img } from "./styled";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.github.com/users")
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    const getUsers = users.map((user, index) => {
        return (
            <Cards key={index}>
                <Img src={user.avatar_url} alt="" />
                <p>{user.login}</p>
                <a>{user.html_url}</a>
            </Cards>
        );
    });

    return <ContainerCards>{getUsers}</ContainerCards>;
};

export default Users;
