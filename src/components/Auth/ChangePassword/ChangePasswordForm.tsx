import { useState } from "react";
import { ChangePassword } from "../../../Service/Auth/authService";
import { Button, Form } from "react-bootstrap";

interface ChangePasswordFormProps {
  onSuccess?: () => void;
}
const ChangePasswordForm = ({ onSuccess }: ChangePasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangePass = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await ChangePassword({ email, password });
      alert("تم تغير كلمه السر بنجاح ✅");
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      alert("فشل تغير كلمه السر حاول مره اخرى ❌");
    }
  };

  return (
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
  );
};

export default ChangePasswordForm;
