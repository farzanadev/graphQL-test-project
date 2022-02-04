const { ApolloServer, gql } = require('apollo-server-express');

const musicSchema = require('./musicSchema')
const registerSchema = require('./registerSchema')
const rootSchema = gql`
  type Query {
   _:Boolean
  }
 type Mutation{
     _:Boolean
 }
`;


module.exports = [rootSchema, musicSchema, registerSchema]