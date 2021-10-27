import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  BtnPost,
  BtnPostBox,
  Card,
  FeedPaegContainer,
  InputComments,
  Interactions,
  LikeDislike,
  TextPost,
  User,
  WriteYourPost,
} from "./styled";

const FeedPage = () => {
  useProtectedPage();

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <FeedPaegContainer>
      <div>
        <WriteYourPost placeholder="Escreva o seu post"></WriteYourPost>
        <BtnPostBox>
          <BtnPost>Postar</BtnPost>
        </BtnPostBox>
      </div>

      <Card>
        <User>Nome do usuário</User>
        <TextPost>Texo do post</TextPost>
        <Interactions>
          <LikeDislike>
            <p>👍</p>
            <p>👎</p>
          </LikeDislike>
          <p>Comentários</p>
        </Interactions>

        <InputComments placeholder="Deixei seu comentário" />
      </Card>
    </FeedPaegContainer>
  );
};

export default FeedPage;
