import React from "react";
import { BtnSignIn, Input, TextField } from "./styled";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useHistory } from "react-router";

const SignUpForm = () => {
  const history = useHistory();

  const [form, onChange, clear] = useForm({
    nome: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    signUp(form, clear, history);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField>
          <Input
            placeholder="Nome"
            type="text"
            name={"nome"}
            value={form.nome}
            onChange={onChange}
            required
          />
        </TextField>

        <TextField>
          <Input
            placeholder="Email"
            type="email"
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
        </TextField>

        <TextField>
          <Input
            placeholder="Senha"
            type="password"
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
          />
        </TextField>

        <TextField>
          <BtnSignIn type={"submit"}>Cadastre-se</BtnSignIn>
        </TextField>
      </form>
    </div>
  );
};

export default SignUpForm;
