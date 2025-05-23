import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { bookService } from "../../Service/Book/BookService";

type Book = {
  id: string | number;
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
};

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await bookService().getAllBooks();
        setBooks(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">قائمة الكتب</h2>
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
