import axios from "axios";
import type { LoginInterFace } from "./AuthInterface";

const API_URL = "http://localhost:5000/api/v1/auth/sign-in";

export const login = ({ email, password }: LoginInterFace) =>
  axios.post(API_URL, { email, password });
