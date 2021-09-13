import "../App.css";
import React from "react";

export default class Etapa1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
  };

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  onChangeIdade = (e) => {
    this.setState({ idade: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Etapa 1 - Dados Gerais</h1>

        <div>
          <p>Qual o seu nome?</p>
          <input
            name={"nome"}
            onChange={this.onChangeNome}
            value={this.state.nome}
          ></input>
        </div>

        <div>
          <p>Qual a sua idade?</p>
          <input
            name={"idade"}
            onChange={this.onChangeIdade}
            value={this.state.idade}
          ></input>
        </div>

        <div>
          <p>Qual o seu email ?</p>
          <input
            name={"email"}
            onChange={this.onChangeEmail}
            value={this.state.email}
          ></input>
        </div>

        <div className="escolaridade">
          <p>Qual a sua escolaridade</p>
          <select>
            <option value="em-incompleto">Ensino Médio Incompleto</option>
            <option value="em-completo">Ensino Médio Completo</option>
            <option value="es-incompleto">Ensino Superior Incompleto</option>
            <option value="es-completo">Ensino Superior Completo</option>
          </select>
        </div>
      </div>
    );
  }
}
