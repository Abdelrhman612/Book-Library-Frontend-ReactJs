import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { VerifyCode } from "../../../Service/Auth/authService";

const VerifyCodeForm = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await VerifyCode({ email, code });
      alert("✅ تم التحقق من الكود بنجاح");
      navigate("/change-password");
    } catch (err) {
      console.error("Verification failed:", err);
      alert("❌ كود غير صالح، حاول مرة أخرى.");
    }
  };

  return (
    <Form onSubmit={handleVerify}>
      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">البريد الإلكتروني</Form.Label>
        <Form.Control
          type="email"
          size="lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@email.com"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">كود التحقق</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          placeholder="أدخل الكود المرسل"
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 py-2">
        تحقق
      </Button>
    </Form>
  );
};

export default VerifyCodeForm;
