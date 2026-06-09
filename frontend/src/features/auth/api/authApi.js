import {apiClient} from "../../../api/apiClient";

export const logout = async () => {
  try {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const register = async (data) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const get_me = async () => {
  try {
    const response = await apiClient.get("/auth/get-me");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
