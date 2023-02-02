import { Schema, model } from "mongoose";

const nftSchema = new Schema({
    id: {
        type: Number
    },
    mint_to: {
        type: String,
        trim: true
    },
    prompt: {
        type: String,
        trim: true
    },
    minted: {
        type: Boolean
    }
})

const NFT = model("NFT",nftSchema)

export default NFT