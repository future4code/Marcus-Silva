import React from "react";
import { SignUpPageContainer } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <div>
      <SignUpPageContainer>
        <SignUpForm />
      </SignUpPageContainer>
    </div>
  );
};

export default SignUpPage;
