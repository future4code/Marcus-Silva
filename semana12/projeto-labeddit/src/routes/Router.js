import React from "react";
import { Switch, Route } from "react-router-dom";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({ setButtonSignOut }) => {
  return (
    <Switch>
      <Route exact path="/signin">
        <SignInPage setButtonSignOut={setButtonSignOut} />
      </Route>

      <Route exact path="/cadastro">
        <SignUpPage setButtonSignOut={setButtonSignOut} />
      </Route>

      <Route exact path="/">
        <FeedPage />
      </Route>

      <Route exact path="/posts/:id">
        <PostsPage />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
