var express = require('express');
var { graphqlHTTP } = require('express-graphql');
// const { createHandler } = require('graphql-http/lib/use/express')
const schema = require('./graphql/schema');
const root = require('./graphql/resolvers');
const auth = require('./middlewares/auth');

var app =  express();

app.use((req, res, next) => {
    // let's allow any domain to get a response from this server
    res.setHeader('Access-Control-Allow-Origin', '*');

    //let's only allow POST and GET requests 
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    next();
});

app.use(auth);

app.all('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
  customFormatErrorFn(error){
    // e.g if error was syntacx in code
    if (!error.originalError) error;

    // if it was my own thrown error
    return { message: error.message, status: error.originalError?.code, data: error.originalError?.data}
  }
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

