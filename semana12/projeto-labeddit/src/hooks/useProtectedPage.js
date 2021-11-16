import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToSignInPage } from "../routes/coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToSignInPage(history);
    }
  }, [history]);
};

export default useProtectedPage;
