import NFT from "../../../db/models/nft/nft.js"
import web3 from "web3"
import { contract, accountAddress, getGasPrice } from "../../../web3/contract.js"
import { generateAndUpload } from "../../../utils/dalle.js"
import { log } from "../../../utils/log.js"

export default async function nft_mint(_, query) {
    const {
        mint_to,
        prompt
    } = query.input

    if (!web3.utils.isAddress(mint_to)) {
        return -1
    }
    const gas = await contract.methods.mint(mint_to).estimateGas({ from: accountAddress })
    const gasPrice = Math.floor(parseInt(await getGasPrice())*1.1)

    console.log("new mint ---- ",{date:new Date(),gas,gasPrice})
    
    const nft = await contract.methods.mint(mint_to).send({
        from: accountAddress,
        gas,
        gasPrice
    })

    const result = nft.events.Transfer.returnValues
    const id = parseInt(result.tokenId)

    const newNft = await NFT.create({
        id,
        prompt,
        mint_to,
        minted: false
    })

    generateAndUpload(id, prompt).then((res)=>{
        newNft.minted = true
        newNft.save()

        log("NFT Minted",{id,mint_to,image_url:res.Location})

    })

    return newNft.id
}