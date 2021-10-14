import React from "react";
import Header from "../../components/Header/Header";
import rocketTwo from "../../img/viagem-to-the-moon.svg";
import {
  BtnFormEnviar,
  CtnFormPage,
  CtnFormPageLeft,
  CtnFormPageRight,
  DivInput,
  H3Form,
  H3FormToo,
  RocketTwoImg,
} from "./styled";

const ApplicationFormPage = () => {
  return (
    <div>
      <Header />
      <CtnFormPage>
        <CtnFormPageLeft>
          <H3Form>
            Precisamos que você informe alguns dados pessoais e qual lugar do
            espaço deseja conhecer
          </H3Form>

          <RocketTwoImg src={rocketTwo} />
        </CtnFormPageLeft>

        <CtnFormPageRight>
          <H3FormToo>Inscreva-se para uma viagem</H3FormToo>

          <DivInput>
            <select>
              <option>Planeta 1</option>
              <option>Planeta 2</option>
              <option>Planeta 3</option>
              <option>Galáxia 1</option>
              <option>Galáxia 2</option>
              <option>Galáxia 3</option>
            </select>
          </DivInput>

          <DivInput>
            <input placeholder="Nome" type="text" />
          </DivInput>

          <DivInput>
            <input placeholder="Idade" type="number" />
          </DivInput>

          <DivInput>
            <input placeholder="Altura" type="text" />
          </DivInput>

          <DivInput>
            <input placeholder="Profissão" type="text" />
          </DivInput>

          <DivInput>
            <select>
              <option>Texto</option>
              <option>Texto</option>
              <option>Texto</option>
              <option>Texto</option>
            </select>
          </DivInput>

          <DivInput>
            <BtnFormEnviar>Enviar</BtnFormEnviar>
          </DivInput>
        </CtnFormPageRight>
      </CtnFormPage>
    </div>
  );
};

export default ApplicationFormPage;
