import React from "react";
import { useHistory } from "react-router";
import {
  goToFeedPage,
  goToSignInPage,
  goToSignUpPage,
} from "../../routes/coordinator";
import {
  BtnSignHeader,
  BtnSignUpHeader,
  HeaderContainer,
  Nav,
  Title,
} from "./styled";

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <div>
        <Title onClick={() => goToFeedPage(history)}>LabEddit</Title>
        <p>Lorem ipsum dolor set whatever</p>
      </div>

      <Nav>
        <BtnSignHeader onClick={() => goToSignInPage(history)}>
          Sign In
        </BtnSignHeader>
        <BtnSignUpHeader onClick={() => goToSignUpPage(history)}>
          Sign Up
        </BtnSignUpHeader>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
