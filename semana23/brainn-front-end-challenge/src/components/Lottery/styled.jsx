import styled from "styled-components";

export const ContainerCircle = styled.div`
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100vh;
    padding: 1em;
`;

export const Circle = styled.div`
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Span = styled.span`
    font-size: 2rem;
`;
