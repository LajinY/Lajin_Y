const typeDefs = `
type User{
    id:ID
    name:String
    gender:String    
}

type Shoes{
    id:ID
    brand:String
    size:Int
    user:User
}

input userInput{
    name:String
    gender:String  
}

input shoesInput{
    brand:String
    size:Int
}

enum Gender{
    male,
    female,
    others
}


type Query{
    getUser(id:ID):Shoes!
} 

type Mutation{
    createUser(user:userInput,shoe:shoesInput):String!
}

`;

export default typeDefs;
