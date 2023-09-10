export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string | undefined;
  profileImageUrl: string;
}
