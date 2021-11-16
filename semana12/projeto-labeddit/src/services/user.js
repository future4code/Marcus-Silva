import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/coordinator";

export const signIn = (body, clear, history, setButtonSignOut) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeedPage(history);
      setButtonSignOut("Sign Out");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const signUp = (body, clear, history, setButtonSignOut) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeedPage(history);
      setButtonSignOut("Sign Out");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
