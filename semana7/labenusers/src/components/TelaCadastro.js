import axios from "axios";
import React from "react";

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  facaSeuCadastro = () => {
    console.log(this.state);

    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "marcus-silva-maryam",
        },
      })
      .then((res) => {
        alert("Usuário(a) cadastrado(a) com sucesso!");

        this.setState({ nome: "", email: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Preencha o formulário</legend>

            <div>
              <label>
                Nome:
                <input
                  type="text"
                  value={this.state.nome}
                  onChange={this.handleNome}
                />
              </label>
            </div>

            <div>
              <label>
                Email:
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </label>
            </div>

            <button onClick={this.facaSeuCadastro}>Cadastrar</button>
          </fieldset>
        </form>

        <button onClick={this.props.irParaLista}>
          Ir para a página de lista
        </button>
      </div>
    );
  }
}
