import { Card, Col, Container, Row } from "react-bootstrap";
import ChangePasswordForm from "./ChangePasswordForm.tsx";

const ChangePasswordPage = () => {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#121212" }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={5}>
          <Card
            className="p-4 shadow border-0"
            style={{ backgroundColor: "#1e1e1e", borderRadius: "15px" }}
          >
            <Card.Body>
              <h2 className="mb-4 text-center text-light fw-bold">
                إعادة تعيين كلمة المرور
              </h2>
              <ChangePasswordForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePasswordPage;
