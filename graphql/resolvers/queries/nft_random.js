import NFT from "../../../db/models/nft/nft.js"

export default async function nft_random(_, query) {

    const count = await NFT.count()

    const random = Math.floor(Math.random()*count)

    return await NFT.findOne({ id: random })
}