import styled from "styled-components";

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    padding: 2em;
`;

export const Cards = styled.div`
    width: 260px;
    height: 100%;
    box-shadow: 3.8px 3.6px 10px rgba(0, 0, 0, 0.035),
        31px 29px 80px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
`;

export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
`;
