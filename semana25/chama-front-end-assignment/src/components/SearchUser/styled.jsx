import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 240px;
    gap: 25px;
    background: linear-gradient(220.55deg, #dde4ff 0%, #8da2ee 100%);

    @media screen and (max-width: 728px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    border: 2px solid #f8f8f8;
    border-radius: 50px;
    outline: 0;
    width: 500px;
    padding: 0.8em;
    font-size: 1.2rem;
    font-weight: bold;
    color: #414141;

    ::-webkit-input-placeholder {
        color: #c5c5c5;
    }

    ::-webkit-search-cancel-button {
        cursor: pointer;
    }

    :focus {
        border: 2px solid #65a3e0;
    }

    @media screen and (max-width: 728px) {
        width: 375px;
        padding: 0.6em;
    }

    @media screen and (max-width: 575px) {
        width: 345px;
        padding: 0.4em;
    }
`;

export const ButtonSearch = styled.input`
    background-color: #65a3e0;
    border-radius: 50px;
    border: none;
    outline: 2px solid #65a3e0;
    outline-offset: 2px;
    padding: 1em 2em;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all 0.1s ease-out;
    cursor: pointer;

    :hover {
        background-color: #74ace3;
        outline: 2px solid #74ace3;
        color: #fff;
    }

    :active {
        transform: scale(0.9);
    }

    @media screen and (max-width: 728px) {
        padding: 0.8em 0;
        width: 375px;
    }

    @media screen and (max-width: 575px) {
        padding: 0.6em 0;
        width: 345px;
    }
`;
