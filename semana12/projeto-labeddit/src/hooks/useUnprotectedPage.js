import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToFeedPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeedPage(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
