import React from "react";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  BtnPost,
  BtnPostBox,
  Card,
  Dislike,
  FeedPaegContainer,
  InputComments,
  Interactions,
  Like,
  LikeDislike,
  TextField,
  TextPost,
  User,
  WriteYourPost,
} from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { goToPostsPage } from "../../routes/coordinator";
import { useHistory } from "react-router";

const FeedPage = () => {
  useProtectedPage();

  const history = useHistory();

  const getPosts = useRequestData([], `${BASE_URL}/posts`);

  const onClickCard = (id) => {
    goToPostsPage(history, id);
  };

  const postsCard = getPosts.map((post) => {
    return (
      <Card key={post.id}>
        <User
          title="Clique para visualizar o post"
          onClick={() => onClickCard(post.id)}
        >
          {post.title}
        </User>
        <TextPost>{post.body}</TextPost>
        <Interactions>
          <LikeDislike>
            <Like>👍</Like>
            <Dislike>👎</Dislike>
          </LikeDislike>
          <p>Comentários</p>
        </Interactions>

        <InputComments placeholder="Deixei seu comentário" />
      </Card>
    );
  });

  return (
    <FeedPaegContainer>
      <form>
        <TextField>
          <WriteYourPost placeholder="Escreva o seu post"></WriteYourPost>
        </TextField>

        <TextField>
          <BtnPostBox>
            <BtnPost>Postar</BtnPost>
          </BtnPostBox>
        </TextField>
      </form>

      <div>{postsCard}</div>
    </FeedPaegContainer>
  );
};

export default FeedPage;
