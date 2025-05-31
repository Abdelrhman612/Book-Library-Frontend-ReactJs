import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import ResetPassword from "./pages/Auth/ResetPassword";
import Book from "./pages/Book/Book";
import SignUp from "./pages/Auth/SignUp";
import VerifyCode from "./pages/Auth/VerifyCode";
import LoginPage from "./components/Auth/Login/LoginPage";
import ChangePasswordPage from "./components/Auth/ChangePassword/ChangePasswordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-code" element={<VerifyCode />}></Route>
        <Route path="/change-password" element={<ChangePasswordPage />}></Route>
        <Route path="/homePage" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
