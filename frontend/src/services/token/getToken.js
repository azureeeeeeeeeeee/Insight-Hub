import { jwtDecode } from "jwt-decode";
import api from "../api";

const refresh = async () => {
  try {
    const res = await api.post("/auth/token/refresh", {
      refresh: localStorage.getItem("REFRESH_TOKEN"),
    });
    localStorage.setItem("ACCESS_TOKEN", res.data.access);
    return res.data.access;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getToken = async () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    console.error("Invalid token : ", error);
    return await refresh();
  }

  if (Date.now() / 1000 > decoded.exp) {
    return await refresh();
  }
  return token;
};

export default getToken;
