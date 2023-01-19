const typedefs = `
type Students{
    id:ID
    name: String
    dept:String
}

type Courses{
    id:ID
    course:String
    student:[Students]
}

input studentInput{
    name:String
    dept:String
}

input courseInput{
    course:String
}

type Query{
    getStudent(id:ID):Students!
}

type Mutation{
    createStudent(student:studentInput, course:courseInput) :String!
}
`;

export default typedefs;
