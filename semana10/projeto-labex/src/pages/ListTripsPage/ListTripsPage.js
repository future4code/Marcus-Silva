import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router";
import {
  BtnInscrevase,
  CtnListTripsPage,
  CtnListTripsPageLeft,
  CtnListTripsPageRight,
  H3,
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
        console.log(res.data.trips);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getListTrips = listTrips.map((item) => {
    return (
      <CtnListTripsPageRight>
        <p>
          <b>Nome:</b> {item.name}
        </p>
        <p>
          <b>Descrição:</b> {item.description}
        </p>
        <p>
          <b>Planeta:</b> {item.planet}
        </p>
        <p>
          <b>Duração em dias:</b> {item.durationInDays}
        </p>
        <p>
          <b>Data:</b> {item.date}
        </p>
      </CtnListTripsPageRight>
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

        <div>
          {/* <div>
            <p>Nome: {listTrips.name}</p>
            <p>Descrição: {listTrips.description}</p>
            <p>Planeta: {listTrips.planet}</p>
            <p>Duração em dias: {listTrips.durationInDays}</p>
            <p>Data: {listTrips.date}</p>
          </div> */}
          {getListTrips}
        </div>
      </CtnListTripsPage>
    </div>
  );
};

export default ListTripsPage;
