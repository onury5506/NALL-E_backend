import express from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from '@apollo/server/express4'
import typeDefs from "./graphql/types/index.js"
import resolvers from "./graphql/resolvers/index.js"
import cors from "cors"
import models from "./db/models/index.js"
import { log } from "./utils/log.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        models
    },
    introspection: process.env.PRODUCTION.toLowerCase() == "true" ? false : true
})

await apolloServer.start()

app.use("/graphql", cors(), express.json(), expressMiddleware(apolloServer))

app.listen(4000, () => {
    log(`Server listening on port 4000`)
})