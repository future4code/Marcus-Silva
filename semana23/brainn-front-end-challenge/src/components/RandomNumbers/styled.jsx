import styled from "styled-components";

export const ContainerCircle = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-content: center;
    gap: 15px;
`;

export const Circle = styled.div`
    background-color: #dcdcdc;
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
