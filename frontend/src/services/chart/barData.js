import api from "../api";
import getToken from "../token/getToken";

const getBarData = async (data) => {
  const token = await getToken();
  const res = await api.post("/data/process/bar/", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.data;
};

export default getBarData;
