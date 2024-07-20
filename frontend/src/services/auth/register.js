import login from "./login";
import api from "../api";

const userRegister = async (data) => {
  if (data.password !== data.password2) {
    throw new Error("Password do not match");
  }
  await api.post("/auth/register/", data);
  await login({ username: data.username, password: data.password });
};

export default userRegister;
