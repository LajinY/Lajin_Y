import { parseArgs } from "util";
import Database from "../database/connection";

import { Student } from "../entity/entity";
class StudentService {
  dbConn = new Database().getConnection();

  public getStudent = async (id: number) => {
    const dbConnection = await this.dbConn;

    const studentRepo = dbConnection.getRepository(Student);

    console.log(id);

    const data = await studentRepo.findOne({ where: { id: id } });

    console.log(data);

    return data;
  };

  public getAllStudent = async () => {
    const dbConnection = await this.dbConn;

    const studentRepo = dbConnection.getRepository(Student);

    const data = await studentRepo.find();

    console.log(data);

    return data;
  };

  public createStudent = async (input: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  }): Promise<Student> => {
    const dbConnection = await this.dbConn;

    const studentRepo = dbConnection.getRepository(Student);

    const data = await studentRepo.save(input);

    return data;
  };

  public updateStudent = async (
    id: number,
    newInput: {
      firstName: string;
      lastName: string;
      age: number;
    }
  ) => {
    const dbConnection = await this.dbConn;

    const studentRepo = dbConnection.getRepository(Student);

    const student = await studentRepo.findOne({ where: { id: id } });

    if (!student) {
      throw new Error("no student found thid id");
    }
    const data = await studentRepo.update(student, newInput);

    student.age=newInput.age;
    student.firstName=newInput.firstName;
    student.lastName=newInput.lastName;
    return student;
  };

  public deleteStudent = async (
    id: number
  ) => {
    const dbConnection = await this.dbConn;

    const studentRepo = dbConnection.getRepository(Student);
    const student = await studentRepo.findOne({ where: { id: id } });

    if (!student) {
      throw new Error("no student found thid id");
    }
    const data = await studentRepo.delete(student);
    return data;
  };
}

export default StudentService;
