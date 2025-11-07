import axios from "axios";
import { store } from "./../global/store";

export const getCampaignMilestones = async (campaignId) => {
  try {
    const token = store.getState().auth.user?.token;

    const response = await axios.get(
      `${import.meta.env.VITE_campaignBaseUrl}/get-campaigns-milestones/${campaignId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data; 
  } catch (error) {
    console.error("Error fetching campaign milestones:", error);
    throw error;
  }
};
