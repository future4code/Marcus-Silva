import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import CreatePlaylist from "./components/CreatePlaylist";
import GetAllPlaylists from "./components/GetAllPlaylists";
import PlaylistDetails from "./components/PlaylistDetails";

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
    currentScreen: "createPlaylist",
  };

  changeCurrentScreen = () => {
    switch (this.state.currentScreen) {
      case "createPlaylist":
        return (
          <CreatePlaylist goToAllPlaylists={this.goToGetAllPlaylistsScreen} />
        );
      case "allPlaylists":
        return (
          <GetAllPlaylists goToCreatePlaylist={this.goToCreatePlaylistScreen} />
        );
      default:
        return <p>The requested url was not found on this server.</p>;
    }
  };

  goToCreatePlaylistScreen = () => {
    this.setState({ currentScreen: "createPlaylist" });
  };

  goToGetAllPlaylistsScreen = () => {
    this.setState({ currentScreen: "allPlaylists" });
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
        {this.changeCurrentScreen()}
      </div>
    );
  }
}
