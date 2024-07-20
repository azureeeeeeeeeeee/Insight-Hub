import api from "./api";
import getToken from "./getToken";

const getData = async (id) => {
  const token = await getToken();
  const res = await api.get(`/data/view/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(`fetching data with id ${id}...`);
  console.log(res.data.data);
  return res.data.data;
};

export default getData;
