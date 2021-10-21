import styled from "styled-components";

export const CtnListTripsPage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 998px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CtnListTripsPageLeft = styled.div`
  padding: 3.5em 3.6em;

  @media screen and (max-width: 998px) {
    text-align: center;
  }
`;

export const BtnInscrevase = styled.button`
  background-color: var(--primary-color);
  font-size: 1.2rem;
  padding: 0.5em 2em;
  border: none;
  outline: 0;
  border-radius: 25px;
  color: #fff;
`;

export const H3 = styled.h3`
  margin-bottom: 35px;
`;

export const CtnListTripsPageRight = styled.div`
  // background-color: pink;
  padding: 2em 2em;
`;

export const CardsTrips = styled.div`
  border: 1px solid #000;
  border-radius: 3px;
  padding: 1em;
  margin: 25px auto;
  width: 22em;
  color: var(--tertiary-color);
`;

export const P = styled.p`
  margin: 12px;
`;

export const B = styled.b`
  color: #000;
`;
