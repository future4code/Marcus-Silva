import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 3em;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e0e0e0;
`;

export const Title = styled.a`
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
`;

export const BtnSignHeader = styled.button`
  text-align: center;
  background-color: transparent;
  color: var(--primaryColor);
  transition: all 0.6s ease-in, transform 0.2s ease-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const BtnSignUpHeader = styled.button`
  transition: all 0.6s ease-in, transform 0.2s ease-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 526px) {
    display: flex;
    flex-direction: column;
  }
`;
