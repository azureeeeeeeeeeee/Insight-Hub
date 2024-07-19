import api from "./api";
import getToken from "./getToken";

const getAllData = async () => {
  const token = await getToken();
  const res = await api.get("/data/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data.data);
  return res.data.data;
};

export default getAllData;
