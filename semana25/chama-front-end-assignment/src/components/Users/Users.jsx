import { Cards, ContainerCards, Img } from "./styled";

const Users = ({ users }) => {
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
