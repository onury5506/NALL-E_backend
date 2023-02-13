export default `
    type NFT{
        id: Int!
        mint_to: String!
        prompt: String!
        minted: Boolean!
    }

    type Query{
        nft_find_one(id: Int!): NFT!
        nft_page_count: Int
        nft_page(page: Int): [NFT]
        nft_random: NFT!
    }

    input NFT_MINT_INPUT{
        mint_to: String!
        prompt: String!
    }

    type Mutation{
        nft_mint(input: NFT_MINT_INPUT!): Int!
    }

`