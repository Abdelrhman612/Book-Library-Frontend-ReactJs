import { useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { SignUp } from "../../Service/authService";

function SignUpComponents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await SignUp({ name, email, password });
      alert("تم التسجيل بنجاح ✅ ");
    } catch (err) {
      alert("فشل التسجيل ❌");
      console.error(err);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center "
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
                <Form onSubmit={handleSignUp}>
                  <Form.Group className="mb-3">
                    <Form.Label>الاسم</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ادخل اسم المستخدم"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>البريد الإلكتروني</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ادخل البريد الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>كلمة المرور</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="ادخل كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-2"
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button
                      variant="success"
                      type="submit"
                      className="py-2 fw-bold"
                    >
                      إنشاء الحساب
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpComponents;
