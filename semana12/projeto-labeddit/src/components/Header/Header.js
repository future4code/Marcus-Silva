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

const Header = ({ buttonSignOut, setButtonSignOut }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const signout = () => {
    localStorage.removeItem("token");
  };

  const buttonSignOutAction = () => {
    if (token) {
      signout();
      setButtonSignOut("Sign In");
      goToSignInPage(history);
    } else {
      goToSignInPage(history);
    }
  };

  return (
    <HeaderContainer>
      <div>
        <Title onClick={() => goToFeedPage(history)}>LabEddit</Title>
        <p>Lorem ipsum dolor set whatever</p>
      </div>

      <Nav>
        <BtnSignHeader onClick={buttonSignOutAction}>
          {buttonSignOut}
        </BtnSignHeader>
        {!token && (
          <BtnSignUpHeader onClick={() => goToSignUpPage(history)}>
            Sign Up
          </BtnSignUpHeader>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
