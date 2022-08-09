import axios from "axios";

export const resolvers = {
  Mutation: {
    signUp: async (user) => {
      try {
        const signedUser = await axios.post(`${process.env.API_HOST}/auth/signUp`, user);
        return signedUser;
      } catch (error) {
        throw error;
      }
    }
  }
};