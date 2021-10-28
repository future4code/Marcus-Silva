import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
  useProtectedPage();

  return (
    <div>
      <h1>página do post</h1>
    </div>
  );
};

export default PostPage;
