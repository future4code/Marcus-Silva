import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Profiles, Button, ImagesProfiles } from "./styled";

const MatchPage = (props) => {
  const [getMatches, setGetMathches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcus-silva-maryam/matches"
      )
      .then((res) => {
        setGetMathches(res.data.matches);
        console.log(res.data.matches);
      })
      .catch((err) => {
        alert(err.response);
      });
  }, []);

  const listAllMatches = getMatches.map((item) => {
    return (
      <Profiles>
        <ImagesProfiles src={item.photo} alt="Imagens aleatórias" />
        <p>{item.name}</p>
      </Profiles>
    );
  });

  return (
    <div>
      <div>{listAllMatches}</div>

      <Button onClick={() => props.changePage("home")}>
        Voltar para Home page
      </Button>
    </div>
  );
};

export default MatchPage;
