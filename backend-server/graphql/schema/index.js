const { ApolloServer, gql } = require('apollo-server-express');

const musicSchema = require('./musicSchema')
const rootSchema = gql`
  type Query {
   _:Boolean
  }
 type Mutation{
     _:Boolean
 }
`;


module.exports = [rootSchema, musicSchema]