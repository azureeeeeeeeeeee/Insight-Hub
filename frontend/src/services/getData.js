import api from "./api";
import getToken from "./getToken";

const getData = async (id) => {
  const token = await getToken();
  const res = await api.get(`/data/view/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
};

export default getData;
