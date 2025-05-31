import { Card, Button } from "react-bootstrap";
import type { Book } from "./InterFace";

interface BookCardProps extends Book {
  onEdit: () => void;
  onDelete?: () => void;
}

const BookCard = ({
  title,
  author,
  category,
  description,
  image,
  onEdit,
  onDelete,
}: BookCardProps) => {
  return (
    <Card className="mb-3" style={{ maxWidth: "350px" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {author} - {category}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning" onClick={onEdit}>
          تعديل
        </Button>
        <Button variant="danger" onClick={onDelete}>
          حذف
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
