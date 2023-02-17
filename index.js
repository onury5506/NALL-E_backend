import 'dotenv/config'
import express from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from '@apollo/server/express4'
import typeDefs from "./graphql/types/index.js"
import resolvers from "./graphql/resolvers/index.js"
import cors from "cors"
import { log } from "./utils/log.js"
import connectDB from "./db/connectDB.js"
import nft_route from './routes/nft/nft.js'

const app = express()

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: process.env.PRODUCTION.toLowerCase() == "true" ? false : true
})

connectDB()

await apolloServer.start()

app.use("/graphql", cors(), express.json(), expressMiddleware(apolloServer))

app.use("/nft", cors(), nft_route)

app.listen(4000, () => {
    log(`Server listening on port 4000`)
})