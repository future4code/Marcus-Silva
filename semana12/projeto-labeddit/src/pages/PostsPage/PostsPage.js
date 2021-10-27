import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
  useProtectedPage();

  return (
    <div>
      <h1>página de posts</h1>
    </div>
  );
};

export default PostPage;
