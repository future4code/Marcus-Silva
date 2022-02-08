import styled from "styled-components";

export const SectionTableContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: auto;
    margin-bottom: 50px;
`;

export const SectionTable = styled.table`
    border-collapse: collapse;

    td {
        border: 1px solid #212121;
        padding: 0.2em 1em;
        text-align: center;
    }
`;

export const TH = styled.th`
    background-color: #768ee5;
    color: #fff;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.2em 1em;
    border: 1px solid #212121;
`;

export const ChartContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
    width: 50%;
`;

export const Legend = styled.div``;

export const ItemsLegend = styled.div`
    display: flex;
    align-items: center;

    div {
        background-color: ${(p) => p.color};
        width: 30px;
        height: 30px;
        margin: 0 15px 15px 0;
    }
`;
