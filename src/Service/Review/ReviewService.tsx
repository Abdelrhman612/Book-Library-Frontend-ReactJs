import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL_Books = `${API_BASE_URL}/review`;

export const reviewService = () => ({
  getAllReviews: () =>
    axios.get(API_URL_Books, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
});
