import UserService from "../../Service/userService";
const resolvers = {
  Query: {
    getUser(_parent: unknown, args: { id: number }) {
      return new UserService().getUser(args.id);
    },
  },
  Mutation: {
    createUser(_parent: unknown, args: any) {
      return new UserService().createUser(args.user, args.shoe);
    },
  },
};

export default resolvers;
