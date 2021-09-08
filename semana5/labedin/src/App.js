import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

import Yo from "./Images/yo.jpg";
import styled from "styled-components";

const Title = styled.h2`
  color: #8b9dc3;
`;

const CardGrandeStyled = styled.div`
  .bigcard-container {
    display: flex;
    align-items: center;
    border: 2px solid #dfe3ee;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
  }

  .bigcard-container img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .bigcard-container h4 {
    margin-bottom: 15px;
  }

  .bigcard-container div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  }
`;

const ImagemButtonStyled = styled.div`
  .image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
  }

  .image-button-container img {
    width: 30px;
    margin-right: 10px;
  }
`;

const CardPequenoStyled = styled.div`
  .smallcard-container {
    border: 1px solid black;
    display: flex;
    align-items: center;
    height: 60px;
    width: 575px;
  }

  .smallcard-container div {
    display: flex;
    padding-left: 10px;
  }
`;

function App() {
  return (
    <div className="App">
      <CardGrandeStyled className="page-section-container">
        <Title>Dados pessoais</Title>
        <CardGrande
          imagem={Yo}
          nome="Marcus"
          descricao="Oi, eu sou o Marcus. Sou estudante de programação web na Labenu."
        />

        <ImagemButtonStyled>
          <ImagemButton
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
            texto="Ver mais"
          />
        </ImagemButtonStyled>
      </CardGrandeStyled>

      <CardPequenoStyled className="smallcard-container">
        <CardPequeno email="Email: marcus@email.com" />
      </CardPequenoStyled>
      <CardPequenoStyled className="smallcard-container">
        <CardPequeno endereco="Rua: Whatever" />
      </CardPequenoStyled>

      <CardGrandeStyled className="page-section-container">
        <Title>Experiências profissionais</Title>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </CardGrandeStyled>

      <CardGrandeStyled className="page-section-container">
        <Title>Minhas redes sociais</Title>

        <ImagemButtonStyled>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </ImagemButtonStyled>
      </CardGrandeStyled>
    </div>
  );
}

export default App;
