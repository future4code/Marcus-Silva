import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const ClearMatches = () => {
  const [clear, setClear] = useState([]);

  useEffect(() => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
      )
      .then((res) => {
        setClear(res.data.matches);
        console.log(res.data.matches);
      })
      .catch((err) => {
        alert(err.response);
      });
  });

  return (
    <div>
      <p>hi</p>
    </div>
  );
};

export default ClearMatches;
