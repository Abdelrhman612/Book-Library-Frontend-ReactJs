import { useState, useEffect } from "react";
import { reviewService } from "../../Service/Review/ReviewService";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import type { Review } from "./interFaceReview";

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await reviewService().getAllReviews();
        setReviews(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <Container className="py-4">
      <h2 className="mb-4 fw-bold text-center">المراجعات</h2>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "200px" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="g-3">
          {reviews.map((review) => (
            <Col md={6} lg={4} key={review.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">
                    ⭐ {review.rating} / 5
                  </Card.Title>
                  <Card.Text>{review.comment}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <small className="text-muted">
                    {new Date(review.createdAt).toLocaleDateString("ar-EG")}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ReviewList;
