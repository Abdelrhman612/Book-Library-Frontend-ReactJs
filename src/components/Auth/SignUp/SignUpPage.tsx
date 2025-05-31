import { Card, Col, Container, Row } from "react-bootstrap";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to right, #1f4037, #99f2c8)",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Body className="p-4">
                <h3 className="text-center mb-4">إنشاء حساب</h3>
                <SignUpForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpPage;
