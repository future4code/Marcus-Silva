import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router";
import {
  BtnInscrevase,
  CtnListTripsPage,
  CtnListTripsPageLeft,
  CtnListTripsPageRight,
  CardsTrips,
  H3,
  B,
  P,
} from "./styled";
import axios from "axios";

const ListTripsPage = () => {
  const history = useHistory();
  const [listTrips, setListTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcus-silva-maryam/trips"
      )
      .then((res) => {
        setListTrips(res.data.trips);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getListTrips = listTrips.map((item) => {
    return (
      <CardsTrips>
        <P>
          <B>Nome:</B> {item.name}
        </P>
        <P>
          <B>Descrição:</B> {item.description}
        </P>
        <P>
          <B>Planeta:</B> {item.planet}
        </P>
        <P>
          <B>Duração em dias:</B> {item.durationInDays}
        </P>
        <P>
          <B>Data:</B> {item.date}
        </P>
      </CardsTrips>
    );
  });

  return (
    <div>
      <Header />
      <CtnListTripsPage>
        <CtnListTripsPageLeft>
          <H3>
            Veja algumas dicas de Viagens Espaciais e aproveite para fazer a sua
            inscrição clicando no botão abaixo que irá direcioná-lo para a
            página do formulário
          </H3>

          <BtnInscrevase onClick={() => history.push("/applicationFormPage")}>
            Inscreva-se
          </BtnInscrevase>
        </CtnListTripsPageLeft>

        <CtnListTripsPageRight>{getListTrips}</CtnListTripsPageRight>
      </CtnListTripsPage>
    </div>
  );
};

export default ListTripsPage;
