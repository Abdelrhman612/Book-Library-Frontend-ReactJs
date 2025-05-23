import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL_Books = `${API_BASE_URL}/book`;

export const bookService = () => {
  const token = localStorage.getItem("token");
  const getAllBooks = () => {
    return axios.get(API_URL_Books, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return { getAllBooks };
};
