import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import VerifyCode from "./pages/Auth/VerifyCode/VerifyCode";
import ChangePassword from "./pages/Auth/ChangePassword/ChangePassword";
import Book from "./pages/Book/Book";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-code" element={<VerifyCode />}></Route>
        <Route path="change-password" element={<ChangePassword />}></Route>
        <Route path="/HomePage" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
