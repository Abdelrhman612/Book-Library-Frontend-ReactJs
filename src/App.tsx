import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import ChangePassword from "./pages/Auth/ChangePassword";
import Book from "./pages/Book/Book";
import SignUp from "./pages/Auth/SignUp";
import VerifyCode from "./pages/Auth/VerifyCode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-code" element={<VerifyCode />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/homePage" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
