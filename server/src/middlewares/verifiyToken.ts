import * as admin from "firebase-admin";
import credentials from "../credentials.json";
import { GraphQLError } from "graphql";

admin.initializeApp({
  credential: admin.credential.cert(credentials as any),
});

export const authorizationJWT = async (accessToken: string) => {
  try {
    if (!accessToken) {
      throw new GraphQLError("Unauthorized");
    }
    const res = await admin
      .auth()
      .verifyIdToken(accessToken)
      .then((decodedToken) => {
        return decodedToken.user_id;
      });
    if (!res) {
      throw new GraphQLError("INTERNAL_SERVER_ERROR");
    }
    const user_id = res as string;
    return user_id;
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error.message);
  }
};
