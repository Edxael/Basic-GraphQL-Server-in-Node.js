const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// Construct a schema, using GraphQL schema language
const MySchema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const MyRoot = {
  hello: () => {
    return 'Hello world!'
  },
}


app.use('/graphql', graphqlHTTP({
  schema: MySchema,
  rootValue: MyRoot,
  graphiql: true,
}))

app.listen( 4000, (err) => {
  if(err){ throw err }
  console.log(" \n Server Up and Running....")
})


// Location of current tutorial:
//
// Youtube: https://www.youtube.com/watch?v=1tqxOCB6FxY
// graphql.com: http://graphql.org/graphql-js/running-an-express-graphql-server/
