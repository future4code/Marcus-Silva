import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  ButtonContainer,
  ButtonIcon,
  BtnIconContainer,
  ImgProfile,
} from "./styled";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const HomePage = (props) => {
  const [chooseProfile, setChooseProfile] = useState({});
  const [choosePerson, setChoosePerson] = useState({});

  useEffect(() => {
    selectProfile();
  }, [choosePerson]);

  const selectProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcus-silva-maryam/person"
      )
      .then((res) => {
        setChooseProfile(res.data.profile);
        console.log(res.data.profile);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const btnMatch = (choose) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcus-silva-maryam/choose-person";

    const body = {
      id: chooseProfile.id,
      choice: choose,
    };

    axios
      .post(url, body)
      .then((res) => {
        setChoosePerson(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Ocorreu um erro!");
      });
  };

  return (
    <div>
      {chooseProfile ? (
        <Card>
          <ImgProfile src={chooseProfile.photo} alt="Imagens aleatórias" />

          <h3>{chooseProfile.name}</h3>
          <p>{chooseProfile.bio}</p>
          <BtnIconContainer>
            <FaHeart
              color="#c06bae"
              size={30}
              cursor="pointer"
              onClick={() => btnMatch(true)}
            />
            <ButtonIcon onClick={() => btnMatch(false)}>X</ButtonIcon>
          </BtnIconContainer>
        </Card>
      ) : (
        <p>Acabaram os perfis.</p>
      )}

      <ButtonContainer>
        <Button onClick={() => props.changePage("matchPage")}>
          Ir para matches
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default HomePage;
