import React from "react";
import {
  Card,
  Button,
  ButtonContainer,
  ButtonIcon,
  BtnIconContainer,
} from "./styled";
import { FaHeart } from "react-icons/fa";

const HomePage = (props) => {
  return (
    <div>
      <Card>
        <img src={"https://picsum.photos/300"} />
        <h3>Name</h3>
        <p>Something</p>
        <BtnIconContainer>
          {/* <button> */}
          <FaHeart color="#c06bae" size={30} cursor="pointer" />
          {/* </button> */}
          <ButtonIcon>X</ButtonIcon>
        </BtnIconContainer>
      </Card>

      <ButtonContainer>
        <Button onClick={() => props.changePage("matchPage")}>
          Ir para matches
        </Button>
        <Button>Limpar matches</Button>
      </ButtonContainer>
    </div>
  );
};

export default HomePage;
