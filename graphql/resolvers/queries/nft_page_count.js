import NFT from "../../../db/models/nft/nft.js"

export default async function nft_page_count(_, query, { models }) {

    return Math.ceil(await NFT.count() / 10)
}