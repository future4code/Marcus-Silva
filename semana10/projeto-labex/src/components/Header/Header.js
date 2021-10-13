import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { BtnArrow, HeaderComponent } from "./styled";
import { useHistory } from "react-router";

const Header = () => {
  let history = useHistory();

  return (
    <HeaderComponent>
      <BtnArrow onClick={() => history.push("/")}>
        <MdArrowBackIosNew size={90} />
      </BtnArrow>
    </HeaderComponent>
  );
};

export default Header;
