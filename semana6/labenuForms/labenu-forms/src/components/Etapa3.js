import "../App.css";
import React from "react";

export default class Etapa3 extends React.Component {
  state = {
    curso: "",
  };

  onChangeCurso = (e) => {
    this.setState({ curso: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>

        <div>
          <p>Por que você não terminou o curso de graduação?</p>
          <input
            name={"curso"}
            onChange={this.onChangeCurso}
            value={this.state.curso}
          ></input>
        </div>

        <div>
          <p>Você fez algum curso complementar?</p>
          <select>
            <option>Nenhum</option>
            <option>Nem outro</option>
          </select>
        </div>
      </div>
    );
  }
}
