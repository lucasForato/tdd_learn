export default {
  Query: {
    getHello: (_: any, __: any, { req }: any) => {
      console.log(req.userId);
      if (!req.userId) {
        return {
          message: "You are not authenticated!",
        };
      }

      return {
        message: "Hello world!",
      };
    },
  },
};
