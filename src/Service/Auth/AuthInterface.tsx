export interface login {
  email: string;
  password: string;
}
export interface signUp {
  name: string;
  email: string;
  password: string;
}
export interface verifyCode {
  email: string;
  code: string;
}
export interface changePassword {
  email: string;
  password: string;
}
