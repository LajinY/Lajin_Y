import AppDataSource from "../Datasource/connection";
import { Courses } from "../Entity/Courses";
import { Students } from "../Entity/Students";

const students = AppDataSource.getRepository(Students);
const courses = AppDataSource.getRepository(Courses);

class udemyService {
  public getStudent = async (id: number) => {
    const data = await students.findOne({ where: { id: id } });
    return data;
  };

  public createStudent = async (student: any, course: any) => {
    const Cstudent = new Students();
    Cstudent.name = student?.name;
    Cstudent.dept = student?.dept;
    await students.save(Cstudent);
    console.log(Cstudent);
    const Ccourse = new Courses();
    Ccourse.course = course?.course;
    Ccourse.udemy = [Cstudent];
    await courses.save(Ccourse);
    console.log(Ccourse);
    console.log(Ccourse.udemy);
    return "created successfully";
  };
}

export default udemyService;
