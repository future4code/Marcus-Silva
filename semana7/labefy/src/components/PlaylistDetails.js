import axios from "axios";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #f5f5f5;
  border: 2px solid #fbfbfb;
  padding: 10px;
`;

export default class PlaylistDetails extends React.Component {
  state = {
    bandOrArtist: "",
    songName: "",
    link: "",
  };

  handleBandOrArtist = (event) => {
    this.setState({ bandOrArtist: event.target.value });
  };

  handleSongName = (event) => {
    this.setState({ songName: event.target.value });
  };

  handleLink = (event) => {
    this.setState({ link: event.target.value });
  };

  addTrackToPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks";

    const body = {
      artist: this.state.bandOrArtist,
      name: this.state.songName,
      url: this.state.link,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "marcus-silva-maryam",
        },
      })
      .then((res) => {
        this.setState({ bandOrArtist: "", songName: "", link: "" });
        console.log(res.data);
      })
      .catch((err) => {
        alert("Ocorreu um erro! Por favor, tente novamente.");
        console.log(err);
      });
  };

  render() {
    return (
      <Div>
        <input
          placeholder="Banda ou Artista"
          value={this.state.bandOrArtist}
          onChange={this.handleBandOrArtist}
        />
        <input
          placeholder="Nome da Música"
          value={this.state.songName}
          onChange={this.handleSongName}
        />
        <input
          placeholder="Link"
          value={this.state.link}
          onChange={this.handleLink}
        />

        <button onClick={this.addTrackToPlaylist}>Adicionar a playlist</button>

        <div>
          <p>Clique no botão abaixo e volte para a lista de playlists</p>
          <button>Lista de playlists</button>
        </div>
      </Div>
    );
  }
}
