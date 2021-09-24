import React from "react";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import styled from "styled-components";
import StarRating from "./components/StarRating";

const Globalstyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

  * {
    box-zising: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f8f8f8;
    font-family: 'Lato', sans-serif;

    display: grid;
    place-content: center;
    min-height: 100vh;

    font-size: calc(2vmin + 10px);
    text-align: center;

    padding: 0 4em;
  }
`;

const Div = styled.div`
  p {
    margin-bottom: 15px;
  }
`;

const Titulo = styled.h1`
  margin-bottom: 15px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  margin: 30px;
  padding: 0.5em 2em;
`;

const Box = styled.div`
  background-color: #f0f0f0;
  padding: 1em;

  h3 {
    margin-bottom: 15px;
  }
`;

export default class App extends React.Component {
  state = {
    atividade: [],
  };

  gerarAtividade = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        console.log(res.data);
        this.setState({ atividade: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { activity, type, participants, price } = this.state.atividade;

    return (
      <Div>
        <Globalstyle />
        <Titulo>Está entediado?</Titulo>
        <p>
          Clicando no botão abaixo você receberá sugestões de atividades que
          poderão quebrar um pouco a sua rotina.
        </p>
        <p>Escolha uma e divirta-se!</p>

        <Button onClick={this.gerarAtividade}>Clique aqui</Button>

        <Box>
          <h3>Sugestão de atividade</h3>
          <p>Nome: {activity}</p>
          <p>Tipo: {type}</p>
          <p>Participantes: {participants}</p>
          <p>Preço: ${price}</p>
        </Box>

        <div>
          <StarRating />
        </div>
      </Div>
    );
  }
}
