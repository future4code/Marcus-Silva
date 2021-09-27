import axios from "axios";
import React from "react";
import styled from "styled-components";

export default class CreatePlaylist extends React.Component {
  state = {
    playlistName: "",
  };

  handlePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value });
    console.log(event.target.value);
  };

  createYourPlaylist = () => {
    console.log(this.state);

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: this.state.playlistName,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "marcus-silva-maryam",
        },
      })
      .then((res) => {
        this.setState({ playlistName: "" });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.responde.data.message);
      });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.playlistName}
            onChange={this.handlePlaylistName}
          />
          <button onClick={this.createYourPlaylist}>Criar playlist</button>
        </div>

        <div>
          <p>
            Clique no botão abaixo que irá levar-lhe para a lista de playlists
            criadas.
          </p>
          <button onClick={this.props.goToAllPlaylists}>Ver Playlist</button>
        </div>
      </div>
    );
  }
}
