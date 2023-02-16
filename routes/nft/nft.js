import { Router } from 'express'
import NFT from '../../db/models/nft/nft.js'

const router = Router()

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id)

    if (id === NaN) {
        return res.sendStatus(404)
    }

    const nft = await NFT.findOne({ id })

    if (!nft) {
        return res.sendStatus(404)
    }

    res.send({
        name: `#${id}`,
        image: `https://nalle.s3.eu-west-3.amazonaws.com/${id}.png`,
        description: "DALL-E NFTs",
        attributes: [
            {
                "trait_type": "Prompt",
                "value": nft.prompt
            }
        ]
    })

})

export default router