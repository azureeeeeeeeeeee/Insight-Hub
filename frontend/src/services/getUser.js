import api from "./api";
import getToken from "./token/getToken";

const getUser = async () => {
  const token = await getToken();
  const res = await api.get("/profile/", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.data;
};

export default getUser;
