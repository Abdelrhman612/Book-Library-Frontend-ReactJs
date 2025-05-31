import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { SignUp } from "../../../Service/Auth/authService";

const SignUpForm = () => {
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
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3">
        <Form.Label>الاسم</Form.Label>
        <Form.Control
          type="text"
          placeholder="ادخل اسم المستخدم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-2"
          required
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
          required
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
          required
        />
      </Form.Group>
      <div className="d-grid">
        <Button variant="success" type="submit" className="py-2 fw-bold">
          إنشاء الحساب
        </Button>
      </div>
    </Form>
  );
};

export default SignUpForm;
