import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../../Service/Auth/authService";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("تم ارسال الكود بنجاح ✅");
      navigate("/verify-code");
    } catch {
      alert("❌ يوجد خطأ حاول مره اخرى");
    }
  };

  return (
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
  );
};

export default ResetPasswordForm;
