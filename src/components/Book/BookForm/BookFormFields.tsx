import { Form } from "react-bootstrap";

interface BookFormFieldsProps {
  title: string;
  setTitle: (value: string) => void;
  author: string;
  setAuthor: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
}

const BookFormFields = ({
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
}: BookFormFieldsProps) => {
  return (
    <>
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
    </>
  );
};

export default BookFormFields;
