import { ButtonSearch, ContainerSearch, Input } from "./styled";

const SearchUser = () => {
    return (
        <ContainerSearch>
            <Input type="search" placeholder="Username" />
            <ButtonSearch>Search</ButtonSearch>
        </ContainerSearch>
    );
};

export default SearchUser;
