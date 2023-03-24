var express = require('express');
var { graphqlHTTP } = require('express-graphql');
// const { createHandler } = require('graphql-http/lib/use/express')
const schema = require('./graphql/schema');
const root = require('./graphql/resolvers')



var app = express();
app.all('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');