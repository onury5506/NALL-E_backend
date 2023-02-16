import NFT from "../../../db/models/nft/nft.js"

const pageSize = 10

export default async function nft_page(_, query, { models }) {

    const { page } = query

    const count = await NFT.count()

    const start = pageSize * page
    const end = Math.min(start + pageSize, count)

    return await NFT.find({ id: { $gte: start, $lt: end } })
}