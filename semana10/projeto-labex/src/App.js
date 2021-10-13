import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage";
import PageNotFound from "./pages/PageNotFound";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --primary-color: #6d64ff;
    --secondary-color: #ff6584;
    --tertiary-color: #3e3c56;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    font-size: calc(2vmin + 6px);
  }

  button {
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={HomePage}>
            <HomePage />
          </Route>

          <Route path="/listTripsPage" exact component={ListTripsPage}>
            <ListTripsPage />
          </Route>

          <Route
            path="/applicationFormPage"
            exact
            component={ApplicationFormPage}
          >
            <ApplicationFormPage />
          </Route>

          <Route path="/loginPage" exact component={LoginPage}>
            <LoginPage />
          </Route>

          <Route path="/tripDetailsPage" exact component={TripDetailsPage}>
            <TripDetailsPage />
          </Route>

          <Route>
            <PageNotFound path="*" exatc component={PageNotFound} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
