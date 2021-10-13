import React from "react";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router";

const ListTripsPage = () => {
  let history = useHistory();

  return (
    <div>
      <Header />

      <div>
        <p>
          Veja algumas dicas de Viagens Espaciais e aproveite para fazer a sua
          inscrição
        </p>

        <button onClick={() => history.push("/applicationFormPage")}>
          Inscreva-se
        </button>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default ListTripsPage;
