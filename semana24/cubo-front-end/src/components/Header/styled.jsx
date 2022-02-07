import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: linear-gradient(220.55deg, #7cf7ff 0%, #4b73ff 100%);
    height: 100%;
    padding: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    gap: 15px;

    @media screen and (max-width: 918px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem 1rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid #f9f9f9;
    color: #f9f9f9;
    font-size: 1rem;
    letter-spacing: 1.5px;
    padding: 0.5em 2em;
    outline: 0;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    transition: 0.2s ease-out;

    :hover {
        background-color: #f9f9f9;
        color: #323232;
    }
`;
