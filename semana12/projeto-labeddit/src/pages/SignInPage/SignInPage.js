import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignInForm from "./SignInForm";
import { SignInPageContainer } from "./styled";

const SignInPage = ({ setButtonSignOut }) => {
  useUnprotectedPage();

  return (
    <SignInPageContainer>
      <SignInForm setButtonSignOut={setButtonSignOut} />
    </SignInPageContainer>
  );
};

export default SignInPage;
