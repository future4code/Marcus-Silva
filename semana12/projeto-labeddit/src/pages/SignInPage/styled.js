import styled from "styled-components";

export const SignInPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export const TextField = styled.div`
  width: 380px;
  margin-bottom: 15px;

  @media screen and (max-width: 446px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5em;
`;

export const BtnSignIn = styled.button`
  width: 100%;

  &:hover {
    background-color: var(--secondaryColor);
  }
`;
