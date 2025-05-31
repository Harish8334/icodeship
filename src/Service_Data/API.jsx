import axios from "axios";

export const submitContactForm = async (formData) => {
  const API_URL = "https://jsonplaceholder.typicode.com/users"; // Replace with actual endpoint

  try {
    const response = await axios.post(API_URL, formData);
    console.log(" Data posted successfully:", response.data);

    return response.data;
  } catch (error) {
    console.error(" Failed to post contact form:", error);
    throw error;
  }
};


