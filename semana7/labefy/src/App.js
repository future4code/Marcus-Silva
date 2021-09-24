import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import CreatePlaylist from "./components/CreatePlaylist";
import GetAllPlaylists from "./components/GetAllPlaylists";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding; 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: calc(2vmin + 4px);
  }
`;

export default class App extends React.Component {
  state = {
    currentScreen: "criarNomeDaPlaylists",
    createdPlaylists: [],
  };

  componentDidMount() {
    this.createPlaylist();
  }

  createPlaylist = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: "",
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "marcus-silva-maryam",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <header>
          <h1>Olá! Seja bem-vindo(a) ao Labefy!</h1>
          <p>
            Sinta-se livre para criar a sua playlist e ouvir <s>onde quiser</s>{" "}
            aqui mesmo.
          </p>
        </header>
      </div>
    );
  }
}
