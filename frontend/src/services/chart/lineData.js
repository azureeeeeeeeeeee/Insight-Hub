import api from "../api";
import getToken from "../token/getToken";

const getLineData = async (data) => {
  const token = await getToken();
  const res = await api.post("/data/process/line/", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.data;
};

export default getLineData;
