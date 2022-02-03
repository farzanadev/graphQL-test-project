const express = require('express')
const app = express();
const { ApolloServer, gql } = require('apollo-server-express')
const db = require('./config/dbConnect');
const newRoute = require('./routes/new')
const typeDefs = require('./graphql/schema/index');
const resolvers = require('./graphql/resolver/index');

const server = new ApolloServer({ typeDefs, resolvers });



server.start().then(res => {
    server.applyMiddleware({ app, path: "/graphql" });
    app.listen({ port: 4000 }, () =>
        console.log('Now browse to http://localhost:4000' + server.graphqlPath)
    )
})




