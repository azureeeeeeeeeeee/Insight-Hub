import api from "./api";
import getToken from "./getToken";

const addData = async (data) => {
  const token = await getToken();
  await api.post("/data/add/", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export default addData;
