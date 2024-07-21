import api from "../api";
import getToken from "../token/getToken";

const getDescriptiveStatistics = async (data) => {
  const token = await getToken();
  const res = await api.post("/data/process/descriptive/", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.data;
};

export default getDescriptiveStatistics;
