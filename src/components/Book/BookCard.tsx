import { Card, Col, Image } from "react-bootstrap";
import type { BookCardProps } from "./InterFace";
const BookCard = ({
  title,
  author,
  category,
  description,
  image,
}: BookCardProps) => {
  return (
    <Col className="col-md-4 mb-4">
      <Card className="card h-100 shadow-sm">
        <Image
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Card.Body>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <Card.Text>
            <strong>التصنيف:</strong> {category}
          </Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
