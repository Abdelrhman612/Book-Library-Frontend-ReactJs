import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { bookService } from "../../Service/Book/BookService";
import type { Book } from "./InterFace";
import {
  Container,
  Row,
  Spinner,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchBooks() {
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

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
  };

  return (
    <Container className="mt-5">
      <InputGroup className="my-3">
        <FormControl
          placeholder="ابحث عن كتاب..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="secondary" onClick={handleSearchClick}>
          🔍
        </Button>
      </InputGroup>

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
