import api from "../api";

const login = async (data) => {
  const res = await api.post("/auth/token", data);
  localStorage.setItem("ACCESS_TOKEN", res.data.access);
  localStorage.setItem("REFRESH_TOKEN", res.data.refresh);
};

export default login;
