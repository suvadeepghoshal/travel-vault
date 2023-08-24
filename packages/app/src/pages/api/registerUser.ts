import { type NextApiRequest, type NextApiResponse } from "next";
import { Type } from "~/types/message";
import { type User } from "~/types/user";
import HashPassword from "~/utils/hashPassword";
import prisma from "~/utils/prismaClient";

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const user = req.body as User;

    user.password = await HashPassword(user.password);

    const { firstName, lastName, email, password, profileImageUrl } = user;

    try {
      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
          profileImageUrl,
        },
      });

      res.status(200).json({ user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: {
          code: 15001,
          message: "Error Creating User!",
          type: Type.ERROR,
        },
      });
    }
  } else {
    res.status(405).json({
      error: {
        code: 10405,
        message: "Error Creating User!",
        type: Type.ERROR,
      },
    });
  }
};

export default registerUser;
