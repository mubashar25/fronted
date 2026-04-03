import API from "../api/axios";

// REGISTER
export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

// LOGIN
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  localStorage.setItem("user", JSON.stringify(res.data));

  return res.data;
};

// PROFILE
export const getProfile = async () => {
  const res = await API.get("/auth/profile");
  return res.data;
};