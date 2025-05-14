import axios from "axios";
import type { login, signUp } from "./AuthInterface";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL_Login = `${API_BASE_URL}/auth/sign-in`;
const API_URL_SignUp = `${API_BASE_URL}/auth/sign-up`;
const API_URL_ResetPassword = `${API_BASE_URL}/auth/Reset-Password`;
export const Login = ({ email, password }: login) =>
  axios.post(API_URL_Login, { email, password });
export const SignUp = ({ name, email, password }: signUp) => {
  axios.post(API_URL_SignUp, {
    name,
    email,
    password,
  });
};
export const resetPassword = (email: string) => {
  axios.post(API_URL_ResetPassword, {
    email,
  });
};
