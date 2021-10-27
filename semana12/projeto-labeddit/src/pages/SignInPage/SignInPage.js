import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignInForm from "./SignInForm";
import { SignInPageContainer } from "./styled";

const SignInPage = () => {
  useUnprotectedPage();

  return (
    <SignInPageContainer>
      <SignInForm />
    </SignInPageContainer>
  );
};

export default SignInPage;
