import axios from "axios";
import { toast } from "react-toastify";

const BaseUrl = import.meta.env.VITE_BaseUrl;

export const signUpUser = async (userData) => {
  try {
   
    const response = await axios.post(
      `https://traceaid.onrender.com/donor/api/v1/register`,
      userData
    );
    return response?.data;
 
  } catch (error) {
    console.log("this is the error", error.response);
    // toast.error = error.response?.data;
  }
};

export const loginUser = async (userData) => {
  try {
    // console.log(`${BaseUrl}`);
    const response = await axios.post(
      `https://traceaid.onrender.com/donor/api/v1/login`,
      userData
    );
    return response?.data;
    // console.log("ap1", response.data)
  } catch (error) {
    console.log("this is the error", error.response);
    // toast.error = error.response?.data;
  }
};
