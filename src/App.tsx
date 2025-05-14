import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyCode from "./pages/VerifyCode/VerifyCode";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-code" element={<VerifyCode />}></Route>
        <Route path="change-password" element={<ChangePassword />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
