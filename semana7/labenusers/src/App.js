import React from "react";

import styled from "styled-components";
import axios from "axios";
import reactDom from "react-dom";

const headers = {
  headers: {
    Authorization: "marcus-silva-maryam",
  },
};

export default class App extends React.Component {
  state = {
    getName: "",
    getEmail: "",
    users: [],
    id: "",
  };

  componentDidMount() {
    this.getAllUsers();
  }

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: "this.state.getName",
      email: "this.state.getEmail",
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ getName: "" });
        this.setState({ getEmail: "" });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  handleGetName = (event) => {
    this.setState({ getName: event.target.value });
    console.log("name");
  };

  handleGetEmail = (event) => {
    this.setState({ getEmail: event.target.value });
    console.log("email");
  };

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = [
      {
        name: "this.state.getName",
        id: "this.state.id",
      },
    ];

    axios
      .get(url, body, headers)
      .then((res) => {
        this.setState({ users: res.data.result.list });
        console.log(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getUserById = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";

    const body = {
      name: "this.state.getName",
      email: "this.state.getEmail",
      id: "this.state.id",
    };
  };

  render() {
    const usersComponets = this.state.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });

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
                  value={this.state.getName}
                  onChange={this.handleGetName}
                />
              </label>
            </div>

            <div>
              <label>
                Email:
                <input
                  type="email"
                  value={this.state.getEmail}
                  onChange={this.handleGetEmail}
                />
              </label>
            </div>

            <button onClick={this.createUser}>Salvar</button>
          </fieldset>
        </form>

        <button>Ir para a página de lista</button>
        {usersComponets}
      </div>
    );
  }
}
