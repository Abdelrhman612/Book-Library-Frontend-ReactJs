import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { bookService } from "../../Service/Book/BookService";
import type { Book } from "./InterFace";

interface BookFormProps {
  show: boolean;
  onClose: () => void;
  bookToEdit?: Book | null;
}
export const BookForm = ({ show, onClose, bookToEdit }: BookFormProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setCategory(bookToEdit.category);
      setDescription(bookToEdit.description);
      setImage(bookToEdit.image);
    } else {
      setTitle("");
      setAuthor("");
      setCategory("");
      setDescription("");
      setImage("");
    }
  }, [bookToEdit, show]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (bookToEdit) {
        await bookService().updateBook(String(bookToEdit.id), {
          title,
          author,
          category,
          description,
          image,
        });
        alert("تم تحديث الكتاب بنجاح!");
      } else {
        await bookService().createBook({
          title,
          author,
          category,
          description,
          image,
        });
        alert("تم إضافة الكتاب بنجاح!");
      }
      onClose();
    } catch (error) {
      console.error("خطأ في العملية:", error);
      alert("حدث خطأ، حاول مرة أخرى.");
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {bookToEdit ? "تعديل الكتاب" : "إضافة كتاب جديد"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>عنوان الكتاب</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>المؤلف</Form.Label>
            <Form.Control
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>التصنيف</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>الوصف</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>رابط صورة الغلاف</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {bookToEdit ? "تحديث" : "حفظ"}
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          إلغاء
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookForm;
