import api from "../api";
import getToken from "../token/getToken";

const getDoughnutData = async (data) => {
  const token = await getToken();
  const res = await api.post(
    "/data/process/doughnut/",
    { data },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data.data;
};

export default getDoughnutData;
