import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router";
import {
  BtnInscrevase,
  CtnListTripsPage,
  CtnListTripsPageLeft,
  CtnListTripsPageRight,
} from "./styled";
import axios from "axios";

const ListTripsPage = () => {
  const history = useHistory();
  const [listTrips, setListTrips] = useState("{}");

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcus-silva-maryam/trips"
      )
      .then((res) => {
        // setListTrips(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  return (
    <div>
      <Header />
      <CtnListTripsPage>
        <CtnListTripsPageLeft>
          <p>
            Veja algumas dicas de Viagens Espaciais e aproveite para fazer a sua
            inscrição
          </p>

          <BtnInscrevase onClick={() => history.push("/applicationFormPage")}>
            Inscreva-se
          </BtnInscrevase>
        </CtnListTripsPageLeft>

        <CtnListTripsPageRight>
          <div>hello</div>
        </CtnListTripsPageRight>
      </CtnListTripsPage>
    </div>
  );
};

export default ListTripsPage;
