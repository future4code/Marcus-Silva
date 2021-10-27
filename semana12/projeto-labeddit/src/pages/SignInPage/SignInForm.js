import React from "react";
import { BtnSignIn, Input, TextField } from "./styled";
import useForm from "../../hooks/useForm";
import { signIn } from "../../services/user";
import { useHistory } from "react-router";

const SignInForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signIn(form, clear, history);
  };

  return (
    <form onSubmit={onSubmitForm}>
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
        <BtnSignIn type={"submit"}>Entrar</BtnSignIn>
      </TextField>
    </form>
  );
};

export default SignInForm;
