import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_campaignBaseUrl}`; 

export const getCampaignMilestones = async (campaignId) => {
  try {
    const res = await axios.get(`${BASE_URL}/get-campaign-and-milestones/${campaignId}`);
    console.log("first xxx",  res.data.data )
    if (res.data?.statusCode) {
      return res.data.data;
    } else {
      throw new Error(res.data?.message || "Failed to fetch campaign data");
    }
  } catch (error) {
    console.error("Error fetching campaign milestones:", error);
    throw error;
  }
};
