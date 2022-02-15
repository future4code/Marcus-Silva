import styled from "styled-components";

export const ContainerNavbar = styled.nav`
    background-color: #f8f8f8;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2.5em;
`;

export const LinkIcon = styled.a`
    display: flex;
    align-items: center;
    gap: 25px;
    text-decoration: none;
    color: #373737;
    transition: 0.2s ease-out;

    :hover {
        color: #000;
    }

    @media screen and (max-width: 525px) {
        margin: 0 auto;
    }
`;
