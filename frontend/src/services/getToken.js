import { jwtDecode } from "jwt-decode";
import api from "./api";

const refresh = async () => {
  try {
    const res = await api.post("/auth/token/refresh", {
      refresh: localStorage.getItem("REFRESH_TOKEN"),
    });
    localStorage.setItem("ACCESS_TOKEN", res.access);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getToken = async () => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const decoded = jwtDecode(token);
  if (Date.now() / 1000 > decoded.exp) {
    await refresh();
  }
  return token;
};

export default getToken;
