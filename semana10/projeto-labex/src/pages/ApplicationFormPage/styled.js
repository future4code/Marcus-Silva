import styled from "styled-components";

export const CtnFormPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 1189px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CtnFormPageLeft = styled.div`
  padding: 3em 3.6em;
  width: 50%;

  @media screen and (max-width: 1024px) {
    padding: 0.5em 2.6em;
  }
`;

export const H3Form = styled.h3`
  margin-bottom: 45px;

  @media screen and (max-width: 1189px) {
    margin-bottom: 20px;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 848px) {
    display: none;
  }
`;

export const RocketTwoImg = styled.img`
  max-width: 100%;
  height: 360px;

  @media screen and (max-width: 696px) {
    display: none;
  }
`;

export const CtnFormPageRight = styled.div`
  width: 50%;
  display: grid;
  place-content: center;

  @media screen and (max-width: 696px) {
    margin-top: 6em;
  }
`;

export const H3FormToo = styled.h3`
  margin-bottom: 25px;

  @media screen and (max-width: 696px) {
    text-align: center;
  }
`;

export const DivInput = styled.div`
  margin-bottom: 15px;
`;

export const BtnFormEnviar = styled.button`
  background-color: var(--primary-color);
  font-size: 1.2rem;
  padding: 0.5em 2em;
  border: none;
  outline: 0;
  border-radius: 25px;
  color: #fff;
  margin-top: 15px;
`;
