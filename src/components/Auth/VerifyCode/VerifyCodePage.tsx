import { Card, Col, Container, Row } from "react-bootstrap";
import VerifyCodeForm from "./VerifyCodeForm";

const VerifyCodePage = () => {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center bg-success"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={5}>
          <Card className="p-4 shadow-lg border-0">
            <Card.Body>
              <h3 className="mb-4 text-center text-success fw-bold">
                أدخل كود التحقق
              </h3>
              <VerifyCodeForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VerifyCodePage;
