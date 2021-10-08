import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Profiles, Button, ImagesProfiles, BtnCtnMatchePage } from "./styled";

const MatchPage = (props) => {
  const [getMatches, setGetMathches] = useState([]);
  const [clear, setClear] = useState({});

  useEffect(() => {
    listMatches();
  }, []);

  const listMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcus-silva-maryam/matches"
      )
      .then((res) => {
        setGetMathches(res.data.matches);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const listAllMatches = getMatches.map((item) => {
    return (
      <Profiles>
        <ImagesProfiles src={item.photo} alt="Imagens aleatórias" />
        <p>{item.name}</p>
      </Profiles>
    );
  });

  const clearMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcus-silva-maryam/clear"
      )
      .then((res) => {
        listMatches();
        alert("Você limpou todos os seu matches.");
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  return (
    <div>
      <div>{listAllMatches}</div>

      <BtnCtnMatchePage>
        <Button onClick={() => props.changePage("home")}>
          Voltar para Home page
        </Button>
        <Button onClick={clearMatches}>Limpar matches</Button>
      </BtnCtnMatchePage>
    </div>
  );
};

export default MatchPage;
