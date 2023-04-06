var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
module.exports = buildSchema(`
  type News {
    title: String!,
    body: String
  }

  type AuthData {
    token: String!,
    id: String!
  }

  input LoginData {
    email: String!,
    password: String!
  }

  type Query {
    hello: String,
    news: News,
    login(loginData: LoginData): AuthData
  }

  type Post {
    id: ID!,
    title: String,
    body: String,
    tags: [String]
    }

    input PostInput {
        title: String,
        body: String,
        tags: [String]
    }

  type Mutation {
    addPost(post: PostInput): Post
  }
`);
