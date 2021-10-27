import React from "react";
import { SignUpPageContainer } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({ setButtonSignOut }) => {
  useUnprotectedPage();

  return (
    <div>
      <SignUpPageContainer>
        <SignUpForm setButtonSignOut={setButtonSignOut} />
      </SignUpPageContainer>
    </div>
  );
};

export default SignUpPage;
