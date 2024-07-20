import getToken from "./getToken";

const checkToken = async () => {
  const token = await getToken();
  if (!token) {
    return false;
  }
  return true;
};

export default checkToken;
