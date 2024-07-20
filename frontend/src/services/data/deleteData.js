import api from "../api";
import getToken from "../token/getToken";

const deleteData = async (id) => {
  console.log(`deleting data with id ${id}...`);
  const token = await getToken();
  await api.delete(`/data/delete/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default deleteData;
