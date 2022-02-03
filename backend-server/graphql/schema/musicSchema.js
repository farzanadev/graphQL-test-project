const { ApolloServer, gql } = require('apollo-server-express');


module.exports = gql`
   extend type Query{
     getMusic:[NewMusic]
  }

  input Music{
    title:String
    singer:String
    duration:Int
  }

type NewMusic{
  _id:ID
  title:String
  singer:String
  duration:Int
}


extend type Mutation{
    addMusic(input:Music):String
}


`;