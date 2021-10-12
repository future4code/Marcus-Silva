import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  gap: 65px;
  padding: 85px;

  @media screen and (max-width: 912px) {
    display: flex;
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  font-size: calc(10vmin + 10px);
  margin-bottom: 0.2em;
`;

export const Span = styled.span`
  color: var(--primary-color);
`;

export const P = styled.p`
  margin-bottom: 1.8em;
`;

export const ContainerBtns = styled.div`
  display: flex;
  gap: 35px;
  padding: 1em 0;

  @media screen and (max-width: 1300px) {
    width: 300px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 912px) {
    margin: 0 auto;
    width: 240px;
  }

  @media screen and (max-width: 614px) {
    width: 198px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const BtnViagens = styled.button`
  background-color: var(--primary-color);
  font-size: 1em;
  padding: 0.5em 2em;
  border: none;
  outline: 0;
  border-radius: 25px;
  color: #fff;
`;

export const BtnAdmin = styled.button`
  background-color: var(--primary-color);
  font-size: 1em;
  padding: 0.5em 2em;
  border: none;
  outline: 0;
  border-radius: 25px;
  color: #fff;
`;

export const ContainerLeft = styled.div`
  text-align: left;
  width: 50%;

  @media screen and (max-width: 912px) {
    text-align: center;
  }

  @media screen and (max-width: 614px) {
    width: 220px;
  }
`;

export const ContainerRight = styled.div`
  text-align: center;
  width: 50%;
`;

export const RocketOneImg = styled.img`
  max-width: 100%;

  @media screen and (max-width: 912px) {
    display: none;
  }
`;
