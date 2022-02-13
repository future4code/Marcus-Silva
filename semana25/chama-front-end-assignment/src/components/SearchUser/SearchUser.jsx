import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonSearch, Form, Input } from "./styled";

const SearchUser = () => {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
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
        <Form onSubmit={onSubmit}>
            <Input type="search" placeholder="Username" onChange={onChange} />
            <ButtonSearch type="submit" value="Search" />
        </Form>
    );
};

export default SearchUser;
