import api from "../api";
import getToken from "../token/getToken";

const getScatterData = async (data) => {
  const token = await getToken();
  const res = await api.post(
    "/data/process/scatter/",
    { data },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data.data;
};

export default getScatterData;
