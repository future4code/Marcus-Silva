import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    padding: 2em;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
