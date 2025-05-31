import { Card, Button } from "react-bootstrap";
import type { BookCardProps } from "./InterFace";

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
        <div className="d-flex justify-content-between">
          <Button variant="warning" onClick={onEdit}>
            تعديل
          </Button>
          <Button variant="danger" onClick={onDelete}>
            حذف
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
