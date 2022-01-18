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
    padding-left: 2.3em;
    width: 400px;
    outline: 0;
    :focus {
        border: 2px solid #55acee;
    }
`;

export const InputSearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfilePic = styled.div`
    background-color: #f8f8f8;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export const ContainerHeader = styled.header`
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
    gap: 30px;
`;

export const ContainerButtons = styled.div`
    padding: 0 10em;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 45px;
`;

export const Buttons = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
    :focus {
        border: none;
    }
`;

export const DivBtn = styled.div`
    /* background-color: pink; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
