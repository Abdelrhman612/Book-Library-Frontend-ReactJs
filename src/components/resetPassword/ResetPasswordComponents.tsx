import { useState } from "react";
import { resetPassword } from "../../Service/authService";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";

const ResetPasswordComponents = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("تم ارسال الكود بنجاح ✅");
    } catch {
      alert("❌ يوجد خطأ حاول مره اخرى");
    }
  };
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
              <Form onSubmit={handleReset}>
                <Form.Group className="mb-3">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="success" className="w-100">
                  إرسال الكود
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordComponents;
