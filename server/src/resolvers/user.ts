import { GraphQLError } from "graphql";
import { authorizationJWT } from "../middlewares/verifiyToken";
import db from "../models";

const { users } = db;

export const userResolver = {
  Query: {
    async getUser(_parent: any, { id }: any, { accessToken }: any) {
      try {
        await authorizationJWT(accessToken as string);
        const user = await users.findByPk(id);
        if (!user) {
          throw new GraphQLError(`User not found!`);
        }
        return {
          id: user.id,
          uid: user.uid,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      } catch (error) {
        console.log(error.message);
        throw new GraphQLError(error.message);
      }
    },

    async getUsers(_parent: any, _args: any, { accessToken }: any) {
      try {
        await authorizationJWT(accessToken as string);
        const userData = await users.findAll();
        if (!userData) {
          throw new GraphQLError(`Users list not found!`);
        }
        return userData.map((user: any) => {
          return {
            id: user.id,
            uid: user.uid,
            email: user.email,
            accessToken: "",
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          };
        });
      } catch (error) {
        console.log(error.message);
        throw new GraphQLError(error.message);
      }
    },
  },
  Mutation: {
    async authenticate(_parent: any, { email, uid }: any, _context: any) {
      try {
        const foundUser = await users.findOne({ where: { uid } });
        if (foundUser) {
          return {
            email,
            uid,
            id: foundUser.id,
            createdAt: foundUser.createdAt,
            updatedAt: foundUser.updatedAt,
          };
        }
        const userData = await users.create({
          email,
          uid,
          id: uid,
        });
        return {
          id: userData.id,
          email,
          uid,
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt,
        };
      } catch (error) {
        console.log(error.message);
        throw new GraphQLError(error.message);
      }
    },
  },
};
