import axios from "axios";
import React from "react";

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
        this.setState({ allPlaylistsCreated: res.data.results });
      })
      .catch((err) => {
        alert("Error! Please, try again.");
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
        alert("Playlist excluída");
      })
      .catch((err) => {
        alert("Error! Please, try again.");
      });
  };

  render() {
    console.log(this.state.allPlaylistsCreated);
    const listOfPlaylists = this.state.allPlaylistsCreated.map((playlist) => {
      return (
        <div key={playlist}>
          {playlist.name}
          <button onClick={() => this.deletePlaylist(playlist.id)}>
            Delete
          </button>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h3>
            Clique no botão abaixo para visualizar sua playlist. Em seguida,
            adicione suas músicas favoritas.
          </h3>
          <button>Playlists</button>
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
