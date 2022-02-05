import styled from "styled-components";

export const Sidebar = styled.div`
    background-color: #6befa3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    color: white;
    padding: 2em 1em;

    @media screen and (max-width: 824px) {
        width: 100%;
        height: 45%;
    }
`;
