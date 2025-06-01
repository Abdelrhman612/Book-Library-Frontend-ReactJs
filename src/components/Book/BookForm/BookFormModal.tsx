import { Modal, Button, Form } from "react-bootstrap";
import BookFormFields from "./BookFormFields";
import { useBookForm } from "./useBookForm";
import type { Book } from "../InterFace";

interface BookFormProps {
  show: boolean;
  onClose: () => void;
  bookToEdit?: Book | null;
}

const BookFormModal = ({ show, onClose, bookToEdit }: BookFormProps) => {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    category,
    setCategory,
    description,
    setDescription,
    image,
    setImage,
    handleSubmit,
  } = useBookForm(bookToEdit || null, onClose);

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {bookToEdit ? "تعديل الكتاب" : "إضافة كتاب جديد"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <BookFormFields
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            category={category}
            setCategory={setCategory}
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
          />
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

export default BookFormModal;
