import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { bookService } from "../../Service/Book/BookService";
import type { Book } from "./InterFace";
import { Container, Row, Spinner } from "react-bootstrap";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBooks(e?: { preventDefault: () => void }) {
      if (e) {
        e.preventDefault();
      }
      try {
        const res = await bookService().getAllBooks();
        setBooks(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    [book.title, book.author, book.category].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container className="mt-5">
      <input
        type="text"
        placeholder="ابحث عن كتاب..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control my-3"
      />

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" />
          <p className="mt-2">جاري التحميل...</p>
        </div>
      ) : (
        <Row>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookCard key={book.id} {...book} />)
          ) : (
            <p className="text-center">لا يوجد كتب بهذا الاسم.</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default BookList;
