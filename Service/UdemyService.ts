import AppDataSource from "../Datasource/connection";
import { Courses } from "../Entity/Courses";
import { Students } from "../Entity/Students";

const students = AppDataSource.getRepository(Students);
const coursess = AppDataSource.getRepository(Courses);
// const udemy=AppDataSource.getRepository(udemy);

class udemyService {
  public getStudent = async (id: number) => {
    const data = await coursess
      .createQueryBuilder("Courses")
      .leftJoinAndSelect("Courses.student", "students")
      .where("Courses.student = :studentId", { studentId: id })
      .getOne();
    // const data = await coursess.findOne({ where: { id: id } });
    console.log(data);
    return data;
  };
  public getStudents = async () => {
    const data = await coursess
      .createQueryBuilder("Courses")
      .leftJoinAndSelect("Courses.student", "student")
      .orderBy("Courses.course  ", "DESC")
      .getMany();
    console.log(data);
    return data;
  };

  public createStudent = async (student: any, course: any) => {
    const Cstudent = new Students();
    Cstudent.name = student?.name;
    Cstudent.dept = student?.dept;
    await students.save(Cstudent);
    const studentId = await students.save(Cstudent);
    console.log(Cstudent);
    const Ccourse = new Courses();
    Ccourse.course = course?.course;
    Ccourse.student = studentId;
    Ccourse.udemy = [Cstudent];
    await coursess.save(Ccourse);
    console.log(Ccourse);
    console.log(Ccourse.udemy);
    return "created successfully";
  };
}

export default udemyService;
