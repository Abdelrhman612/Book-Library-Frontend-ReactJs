import { Card, Col, Container, Row } from "react-bootstrap";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <Container
      fluid
      className="min-vh-100 bg-dark d-flex justify-content-center align-items-center"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card
            className="p-4 border-0 shadow"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "1rem" }}
          >
            <Card.Body>
              <h3 className="text-center mb-4 text-success">
                إعادة تعيين كلمة المرور
              </h3>
              <p className="text-center text-muted mb-4">
                أدخل بريدك الإلكتروني وسنرسل لك كود التحقق
              </p>
              <ResetPasswordForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordPage;
