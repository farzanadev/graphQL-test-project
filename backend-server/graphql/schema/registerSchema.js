const { ApolloServer, gql } = require('apollo-server-express');

module.exports = gql`
   extend type Query{
        getUser:[NewUser]
     }

     input User{
        name:String
        email:String
        password:Int
      }
    
      type NewUser{
        _id:ID
        name:String
        email:String
        password:Int
      }

      type LoginUser{
        name:String
        email:String
      }

    extend type Mutation{
        addUser(input:User):String
    }
      
    
   

`