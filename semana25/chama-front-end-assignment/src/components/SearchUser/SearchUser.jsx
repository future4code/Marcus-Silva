import { ButtonSearch, Form, Input } from "./styled";

const SearchUser = ({ search, setSearch, searchUsers }) => {
    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (search === "") {
            alert("Por favor, insira o nome de algum usuário.");
        } else {
            searchUsers(search);
            setSearch("");
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Input
                type="search"
                placeholder="Username"
                onChange={onChange}
                value={search}
            />
            <ButtonSearch type="submit" value="Search" />
        </Form>
    );
};

export default SearchUser;
