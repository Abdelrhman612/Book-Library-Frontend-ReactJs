import { Card, Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h4 className="mb-4 text-center">تسجيل الدخول</h4>
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
