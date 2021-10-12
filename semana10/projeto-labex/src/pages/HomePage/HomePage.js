import React from "react";
import {
  BtnAdmin,
  BtnViagens,
  ContainerBtns,
  ContainerLeft,
  ContainerRight,
  Div,
  H1,
  P,
  RocketOneImg,
  Span,
} from "./styled";
import rocket from "../../img/rocket-outer-space.svg";

const HomePage = (props) => {
  return (
    <Div>
      <ContainerLeft>
        <H1>
          Labe<Span>X</Span>
        </H1>
        <P>
          Prepare-se para uma jornada nas estrleas ✨ desbravando esse vasto
          universo
        </P>

        <ContainerBtns>
          <BtnViagens onClick={() => props.changePage("listTrips")}>
            Ver Viagens
          </BtnViagens>
          <BtnAdmin>Área de Admin</BtnAdmin>
        </ContainerBtns>
      </ContainerLeft>

      <ContainerRight>
        <RocketOneImg src={rocket} />
      </ContainerRight>
    </Div>
  );
};

export default HomePage;
