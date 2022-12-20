const typeDefs = `
type Student {
  id:ID
  firstName:String
  lastName:String
  age:Int
}

 input StudentInput{
  id:ID
  firstName:String
  lastName:String
  age:Int
}

input updateStud{
  
  firstName:String
  lastName:String
  age:Int
}

type Query {
  getStudent(id:ID!):Student
  getAllStudents:[Student]
}

type Mutation{
  createStudent(input:StudentInput):Student
  updateStudent(id:ID,newInput:updateStud):Student
  deleteStudent(id:ID):Student
}



`;

export default typeDefs;
