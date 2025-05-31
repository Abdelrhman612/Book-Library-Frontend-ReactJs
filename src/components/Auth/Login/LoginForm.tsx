import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Login } from "../../../Service/Auth/authService";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await Login({ email, password });
      const token: string = res.data.data.token;
      localStorage.setItem("token", token);
      alert("✅ تم تسجيل الدخول بنجاح");
      navigate("/homePage");
    } catch (err) {
      console.error("Login failed:", err);
      alert("❌ فشل تسجيل الدخول. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
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
      <div className="mt-3 text-center justify-content-between d-flex">
        <Link to="/reset-password" className="text-decoration-none">
          نسيت كلمة المرور؟
        </Link>
        <Link to="/signUp" className="text-decoration-none">
          التسجيل
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
