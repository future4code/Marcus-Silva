export const goToSignInPage = (history) => {
  history.push("/signin");
};

export const goToSignUpPage = (history) => {
  history.push("/cadastro");
};

export const goToFeedPage = (history) => {
  history.push("/");
};

export const goToPostsPage = (history, id) => {
  history.push(`/posts/${id}`);
};
