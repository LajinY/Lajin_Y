import { Student } from "../../entity/entity";
import StudentService from "../../service/studentService";

const resolvers = {
  Query: {
    getStudent: (_parent: unknown, args: { id: number }) => {
      return new StudentService().getStudent(args.id);
    },
    getAllStudents() {
      return new StudentService().getAllStudent();
    },
  },
  Mutation: {
    createStudent: (
      _parent: unknown,
      args: {
        input: { id: number; firstName: string; lastName: string; age: number };
      }
    ) => {
      return new StudentService().createStudent(args.input);
    },
    updateStudent: (
      _parent: unknown,
      args: {
        id: number;
        newInput: { firstName: string; lastName: string; age: number };
      }
    ) => {
      return new StudentService().updateStudent(args.id, args.newInput);
    },
    deleteStudent: (
      _parent: unknown,
      args: {
        id: number;
      }
    ) => {
      return new StudentService().deleteStudent(args.id);
    },
  },
};

export default resolvers;
