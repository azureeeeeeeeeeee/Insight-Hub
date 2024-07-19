const logout = async () => {
  await localStorage.removeItem("ACCESS_TOKEN");
  await localStorage.removeItem("REFRESH_TOKEN");

  window.location.href = "/login";
};

export default logout;
