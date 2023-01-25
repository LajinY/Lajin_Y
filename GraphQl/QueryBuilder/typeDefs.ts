const typeDefs = `
type Movie{
    id:ID
    title:String
    language:String
}
input movieInput{
    title:String
    language:String
}
input movieUpdate{
    id:ID
    title:String
    language:String
}
type Query{
    getMovie(id:ID):Movie!
    getAll:[Movie]
}
type Mutation{
    createMovie(input:movieInput):Movie!
    deleteMovie(id:ID):Movie!
    updateMovie(id:ID,input:movieUpdate):Movie!
}

`;

export default typeDefs;
