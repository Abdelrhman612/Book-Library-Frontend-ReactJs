import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { bookService } from "../../Service/Book/BookService";
import type { Book } from "./InterFace";
import { Container, Row } from "react-bootstrap";

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
    <Container className="mt-5">
      <h2 className="mb-4">قائمة الكتب</h2>
      <Row>
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
