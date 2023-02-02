import NFT from "../../../db/models/nft/nft.js"
import { GraphQLError } from 'graphql'

export default async function nft_find_one(_, query, { models }) {
    let {
        id
    } = query

    id = parseInt(id)

    if (id == NaN || id < 0) {
        throw new GraphQLError('Invalid ID', {
            extensions: {
                code: 'BAD_USER_INPUT',
            },
        })
    }

    const res = await NFT.findOne({ id })

    if (!res) {
        throw new GraphQLError('Nft Not Found', {
            extensions: {
                code: 'BAD_USER_INPUT',
            },
        })
    }

    return res
}