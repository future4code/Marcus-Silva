import React from "react";

import TelaCadastro from "./components/TelaCadastro";
import TelaListaDeUsuarios from "./components/TelaListaDeUsuarios";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaTelaDeLista} />;
      case "lista":
        return (
          <TelaListaDeUsuarios irParaCadastro={this.irParaTelaDeCadastro} />
        );
      default:
        return <h2>Error! Page not found.</h2>;
    }
  };

  irParaTelaDeCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaTelaDeLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}
