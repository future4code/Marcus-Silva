import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 1px solid #f2f2f2;
  padding: 10px;
  margin: 10px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class TelaListaDeUsuarios extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, {
        headers: {
          Authorization: "marcus-silva-maryam",
        },
      })
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um erro. Por favor, tente novamente.");
      });
  };

  deletarUsuario = (id) => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";

    axios
      .delete(url, {
        headers: {
          Authorization: "marcus-silva",
        },
      })
      .then((res) => {
        alert("Usuario(a) deletado(a) com sucesso!");
        this.pegarUsuarios();
      })
      .catch((err) => {
        alert("Ocorreu um erro. Por favor, tente novamente.");
      });
  };

  render() {
    console.log(this.state.usuarios);
    const listaUsuarios = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>Remover</button>
        </CardUsuario>
      );
    });

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>
          Ir para a página de cadastro
        </button>

        {listaUsuarios}
      </div>
    );
  }
}
