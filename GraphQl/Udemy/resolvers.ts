import udemyService from "../../Service/UdemyService";
const resolvers = {
  Query: {
    getStudent(_parent: unknown, args: { id: number }) {
      return new udemyService().getStudent(args.id);
    },
    getStudents() {
      return new udemyService().getStudents();
    },
  },
  Mutation: {
    createStudent(_parent: unknown, args: any) {
      return new udemyService().createStudent(args.student, args.course);
    },
  },
};

export default resolvers;
