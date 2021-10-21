import axios from "axios";
import React, { useState, useEffect } from "react";
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
  const [applyForm, setApplyForm] = useState({});

  useEffect(() => {
    sendApplicationForm();
  }, []);

  const sendApplicationForm = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcus-silva-maryam/trips/:id/apply";

    const body = {
      name: "",
      age: 0,
      applicationText: "",
      profession: "",
      country: "",
    };

    axios
      .post(url, body)
      .then((res) => {
        setApplyForm(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

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
          <form>
            <H3FormToo>Inscreva-se para uma viagem</H3FormToo>

            <DivInput>
              <select>
                <option selected disabled>
                  Destino
                </option>
                <option>Planeta 1</option>
                <option>Planeta 2</option>
                <option>Planeta 3</option>
                <option>Galáxia 1</option>
                <option>Galáxia 2</option>
                <option>Galáxia 3</option>
              </select>
            </DivInput>

            <DivInput>
              <input placeholder="Nome" type="text" value={applyForm.name} />
            </DivInput>

            <DivInput>
              <input placeholder="Idade" type="number" value={applyForm.age} />
            </DivInput>

            <DivInput>
              <input
                placeholder="Texto de Candidatura"
                type="text"
                value={applyForm.applicationText}
              />
            </DivInput>

            <DivInput>
              <input
                placeholder="Profissão"
                type="text"
                value={applyForm.profession}
              />
            </DivInput>

            <DivInput>
              <select value={applyForm.country}>
                <option selected disabled>
                  Escolha um País
                </option>
                <option>Brasil</option>
              </select>
            </DivInput>

            <DivInput>
              <BtnFormEnviar>Enviar</BtnFormEnviar>
            </DivInput>
          </form>
        </CtnFormPageRight>
      </CtnFormPage>
    </div>
  );
};

export default ApplicationFormPage;
