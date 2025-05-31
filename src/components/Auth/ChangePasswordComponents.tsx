import { useState } from "react";
import { ChangePassword } from "../../Service/Auth/authService";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const ChangePasswordComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangePass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await ChangePassword({ email, password });
      alert("تم تغير كلمه السر بنجاح ✅");
    } catch (err) {
      console.error(err);
      alert("فشل تغير كلمه السر حاول مره اخرى ❌");
    }
  };

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
              <Form onSubmit={handleChangePass}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold text-light">
                    البريد الإلكتروني
                  </Form.Label>
                  <Form.Control
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@example.com"
                    className="rounded-pill bg-dark text-light border-0"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold text-light">
                    كلمة المرور الجديدة
                  </Form.Label>
                  <Form.Control
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="********"
                    className="rounded-pill bg-dark text-light border-0"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 fw-bold rounded-pill"
                >
                  تحديث كلمة المرور
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePasswordComponents;
