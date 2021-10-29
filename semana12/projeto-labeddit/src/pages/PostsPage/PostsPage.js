import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Card } from "../FeedPage/styled";

const PostPage = () => {
  useProtectedPage();

  const [postDetails, setPostDetails] = useState(null);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!params.id) {
      history.push("/");
    }
  });

  useEffect(() => {
    const getPostComments = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${BASE_URL}/posts/:id/comments`)
      .then((res) => {
        console.log(res.data.post);
      })
      .catch((err) => {
        console.error(err.response);
      });
  });

  return (
    <div>
      <p>PostPage</p>
      {postDetails !== null && <Card post={postDetails} />}
    </div>
  );
};

export default PostPage;
