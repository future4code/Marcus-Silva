import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;

    @media screen and (max-width: 824px) {
        display: flex;
        flex-direction: column;
    }
`;
