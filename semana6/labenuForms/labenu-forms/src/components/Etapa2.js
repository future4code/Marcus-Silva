import "../App.css";
import React from "react";

export default class Etapa2 extends React.Component {
  state = {
    curso: "",
    unidadeEnsino: "",
  };

  onChangeCurso = (e) => {
    this.setState({ curso: e.target.value });
  };

  onChangeUnidadeEnsino = (e) => {
    this.setState({ unidadeEnsino: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>

        <div>
          <p>Qual curso?</p>
          <input
            name={"curso"}
            onChange={this.onChangeCurso}
            value={this.state.curso}
          ></input>
        </div>

        <div>
          <p>Qual a unidade de ensino?</p>
          <input
            name={"unidade ensino"}
            onChange={this.onChangeUnidadeEnsino}
            value={this.state.unidadeEnsino}
          ></input>
        </div>
      </div>
    );
  }
}
