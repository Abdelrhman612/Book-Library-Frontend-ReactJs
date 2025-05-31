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
  const createBook = (newBook: {
    title: string;
    author: string;
    category: string;
    description: string;
    image: string;
  }) => {
    return axios.post(API_URL_Books, newBook, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  const updateBook = (
    id: string,
    updatedBook: {
      title: string;
      author: string;
      category: string;
      description: string;
      image: string;
    }
  ) => {
    return axios.patch(`${API_URL_Books}/${id}`, updatedBook, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  const deleteBook = (id: string) => {
    return axios.delete(`${API_URL_Books}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return { getAllBooks, createBook, updateBook, deleteBook };
};
