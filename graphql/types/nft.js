export default `
    type NFT{
        id: ID!
        mint_to: String!
        prompt: String!
        minted: Boolean!
    }

    type Query{
        nft_find_one(id: ID!): NFT!
        nft_page_count: Int
        nft_page(page: Int): [NFT]
    }

    input NFT_MINT_INPUT{
        mint_to: String!
        prompt: String!
    }

    type Mutation{
        nft_mint(input: NFT_MINT_INPUT!): Int!
    }

`