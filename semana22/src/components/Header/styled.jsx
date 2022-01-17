import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #dcdcdc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    padding: 0 2em;
`;

export const NavFirstContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
`;

export const Search = styled.input`
    border: 1px solid #dcdccd;
    border-radius: 25px;
    font-size: 1.2rem;
    padding: 0.3em 1em;
    width: 400px;
    outline: 0;
    :focus {
        border: 2px solid #55acee;
    }
`;

export const ContainerHeader = styled.header`
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
`;

export const ProfilePic = styled.div`
    background-color: #f8f8f8;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;
