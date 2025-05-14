import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../../Service/Auth/authService";

const LoginComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await Login({ email, password });
      const token: string = res.data.data.token;
      localStorage.setItem("token", token);
      alert("✅ تم تسجيل الدخول بنجاح");
    } catch (err) {
      console.error("Login failed:", err);
      alert("❌ فشل تسجيل الدخول. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h4 className="mb-4 text-center">تسجيل الدخول</h4>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>كلمة المرور</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  دخول
                </Button>
                <div className="mt-3 text-center">
                  <Link to="/reset-password" className="text-decoration-none">
                    نسيت كلمة المرور؟
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponents;
