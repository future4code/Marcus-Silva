import React from "react";
import { Profiles } from "./styled";

const MatchPage = (props) => {
  return (
    <div>
      <Profiles>
        <img src={"https://picsum.photos/50"} />
        <p>Name</p>
      </Profiles>

      <button onClick={() => props.changePage("home")}>
        Voltar para Home page
      </button>
    </div>
  );
};

export default MatchPage;
