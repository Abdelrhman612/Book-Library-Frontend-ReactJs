import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
