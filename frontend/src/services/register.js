import axios from "axios";

const userRegister = async (data) => {
  if (data.password !== data.password2) {
    throw new Error("Password do not match");
  }
  await axios.post("http://127.0.0.1:8000/api/auth/register/", data);
};

export default userRegister;
