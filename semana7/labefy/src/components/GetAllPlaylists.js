import axios from "axios";
import React from "react";
import styled from "styled-components";

const PlaylistCard = styled.div`
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  width: 450px;
`;

export default class GetAllPlaylists extends React.Component {
  state = {
    allPlaylistsCreated: [],
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "marcus-silva-maryam",
        },
      })
      .then((res) => {
        this.setState({ allPlaylistsCreated: res.data.result.list });
      })
      .catch((err) => {
        alert("Ocorreu um erro ao tentar acessar as playlists criadas.");
      });
  };

  deletePlaylist = (id) => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId";

    axios
      .delete(url, {
        headers: {
          Authorization: "marcus-silva-maryam",
        },
      })
      .then((res) => {
        this.getAllPlaylists();
        alert("Playlist excluída.");
      })
      .catch((err) => {
        alert("Ocorreu um erro ao tentar remover essa playlist.");
      });
  };

  render() {
    console.log(this.state.allPlaylistsCreated);
    const listOfPlaylists = this.state.allPlaylistsCreated.map((playlist) => {
      return (
        <PlaylistCard key={playlist}>
          {playlist.name}
          <button onClick={() => this.deletePlaylist(playlist.id)}>
            Remover
          </button>
        </PlaylistCard>
      );
    });

    return (
      <div>
        <div>
          <h3>
            Clique no botão abaixo para visualizar sua playlist. Em seguida,
            adicione suas músicas favoritas.
          </h3>
          <button onClick={this.getAllPlaylists}>Playlists</button>
        </div>

        <div>{listOfPlaylists}</div>

        <div>
          <p>Volte para a página anterior clicando no botão abaixo.</p>
          <button onClick={this.props.goToCreatePlaylist}>Voltar</button>
        </div>
      </div>
    );
  }
}
