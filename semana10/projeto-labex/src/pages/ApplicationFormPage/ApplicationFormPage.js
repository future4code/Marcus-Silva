import React from "react";
import rocketTwo from "../../img/viagem-to-the-moon.svg";
import { RocketTwoImg } from "./styled";

const ApplicationFormPage = () => {
  return (
    <div>
      <div>
        <p>
          Peencha o formulário lorem Ipsum is simply dummy text of the printing
          and typesetting industry
        </p>

        <RocketTwoImg src={rocketTwo} />
      </div>

      <div>
        <h3>Inscreva-se para uma viagem</h3>

        <select>
          <option>Planeta 1</option>
          <option>Planeta 2</option>
          <option>Planeta 3</option>
          <option>Galáxia 1</option>
          <option>Galáxia 2</option>
          <option>Galáxia 3</option>
        </select>

        <input placeholder="Nome" type="text" />
        <input placeholder="Idade" type="number" />
        <input placeholder="Altura" type="text" />
        <input placeholder="Profissão" type="text" />

        <select>
          <option>Texto</option>
          <option>Texto</option>
          <option>Texto</option>
          <option>Texto</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicationFormPage;
