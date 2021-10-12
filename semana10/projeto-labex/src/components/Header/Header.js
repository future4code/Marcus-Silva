import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { BtnArrow, HeaderComponent } from "./styled";

const Header = (props) => {
  return (
    <HeaderComponent>
      <BtnArrow onClick={() => props.changePage("home")}>
        <MdArrowBackIosNew size={90} />
      </BtnArrow>
    </HeaderComponent>
  );
};

export default Header;
