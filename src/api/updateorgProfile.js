import axios from "axios";

export const updateOrganization = async (_id, data, token) => {
  const formData = new FormData();
  
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });

  const response = await axios.put(
    `${import.meta.env.VITE_BaseUrl2}/update/${_id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
return response;
};
