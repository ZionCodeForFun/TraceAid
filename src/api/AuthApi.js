import axios from "axios";

const BaseUrl = import.meta.env.VITE_BaseUrl;

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${BaseUrl}/user/sign-up`, userData);
    return response?.data;
  } catch (error) {
    throw error.response?.data;
  }
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${BaseUrl}/login`, userData);
  return response.data;
}