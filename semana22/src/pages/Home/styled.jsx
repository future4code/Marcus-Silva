import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
    padding: 4em 2em;
`;

export const Card = styled.div`
    background-color: pink;
    width: 300px;
    height: 400px;
    margin: 0 auto;
`;
