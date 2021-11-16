import React from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const PostPage = () => {
  useProtectedPage();

  const params = useParams();

  const postDetails = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  )[0];
  console.log(postDetails);

  return (
    <div>
      <p>{postDetails && postDetails.title}</p>
    </div>
  );
};

export default PostPage;
