import axios from "axios";

const VITE_campaignBaseUrl = import.meta.env.VITE_campaignBaseUrl;

export const GetAllCampaignsAPI = async (token) => {
  return await axios.get(`${VITE_campaignBaseUrl}/get-all-campaigns`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};