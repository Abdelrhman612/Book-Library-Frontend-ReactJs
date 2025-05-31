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
import BookForm from "./BookForm";

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [bookToEdit, setBookToEdit] = useState<Book | null>(null);
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await bookService().getAllBooks();
      setBooks(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
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
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "هل أنت متأكد أنك تريد حذف هذا الكتاب؟"
    );
    if (!confirmDelete) return;

    try {
      await bookService().deleteBook(id);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      alert("تم حذف الكتاب بنجاح!");
    } catch (error) {
      console.error("حدث خطأ أثناء الحذف:", error);
      alert("حدث خطأ، لم يتم حذف الكتاب.");
    }
  };

  return (
    <Container className="mt-5">
      <InputGroup className="my-3">
        <Button
          variant="success"
          onClick={() => {
            setBookToEdit(null);
            setShowForm(true);
          }}
        >
          ➕ أضف كتاب
        </Button>

        <BookForm
          show={showForm}
          onClose={() => {
            setShowForm(false);
            fetchBooks();
          }}
          bookToEdit={bookToEdit ? bookToEdit : undefined}
        />

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
        <Row className="d-flex flex-wrap justify-content-center">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                {...book}
                onEdit={() => {
                  setBookToEdit(book);
                  setShowForm(true);
                }}
                onDelete={() => handleDelete(String(book.id))}
              />
            ))
          ) : (
            <p className="text-center w-100">لا يوجد كتب بهذا الاسم.</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default BookList;
