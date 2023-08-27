import * as bcrypt from "bcrypt";

const HashPassword = {
  encrypt: async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  },
  decrypt: async (
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  },
};

export default HashPassword;
