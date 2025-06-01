import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./components/Auth/Login/LoginPage";
import ChangePasswordPage from "./components/Auth/ChangePassword/ChangePasswordPage";
import ResetPasswordPage from "./components/Auth/ResetPaasword/ResetPasswordPage";
import SignUpPage from "./components/Auth/SignUp/SignUpPage";
import VerifyCodePage from "./components/Auth/VerifyCode/VerifyCodePage";
import BookList from "./components/Book/BookList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify-code" element={<VerifyCodePage />}></Route>
        <Route path="/change-password" element={<ChangePasswordPage />}></Route>
        <Route path="/homePage" element={<BookList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
