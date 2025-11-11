import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../global/authSlice";
import { isTokenExpired } from "../utils/auth";

export const useAutoLogout = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    const checkToken = () => {
      if (isTokenExpired(token)) {
        dispatch(logout());
      }
    };

    checkToken();

    const intervalId = setInterval(checkToken, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [token, dispatch]);
};
