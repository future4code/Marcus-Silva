import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import astronaut from "../../img/astronaut.svg";
import {
  AstronautImg,
  BtnLogin,
  CtnLoginPage,
  CtnLoginPageLeft,
  CtnLoginPageRight,
} from "./styled";

const LoginPage = () => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <CtnLoginPage>
        <CtnLoginPageLeft>
          <p>Faça o seu Login</p>

          <div>
            <input placeholder="Email" type="text" />
          </div>

          <div>
            <input placeholder="Senha" type="number" />
          </div>

          <div>
            <BtnLogin onClick={() => history.push("tripDetailsPage")}>
              Entrar
            </BtnLogin>
          </div>
        </CtnLoginPageLeft>

        <CtnLoginPageRight>
          <AstronautImg src={astronaut} />
        </CtnLoginPageRight>
      </CtnLoginPage>
    </div>
  );
};

export default LoginPage;
