import styled from "styled-components";

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 30px;
    margin: 4em;
`;

export const Cards = styled.div`
    height: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.04),
        0px 0px 80px rgba(0, 0, 0, 0.08);

    border-radius: 16px;
    padding: 1.5em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    word-break: break-all;
`;

export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;
