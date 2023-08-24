import * as bcrypt from "bcrypt";

const HashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword: string = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export default HashPassword;
