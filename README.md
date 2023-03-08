# NALLE - Create Free NFTs Powered by DALL-E AI and Polygon Network

https://nalle.onuryildiz.dev

NALLE is an NFT project that allows users to create free NFTs using DALL-E AI and the Polygon network. This project has three main components: backend, frontend, and smart contract.

## Repositories
backend : https://github.com/onury5506/NALL-E_frontend
frontend : https://github.com/onury5506/NALL-E_backend
smart contract : https://github.com/onury5506/NALL-E_smart-contract

## Technologies Used

### Backend
* Node.js
* Express.js
* GraphQL
* web3.js
* Mongoose
* AWS S3

### Frontend
* NextJs
* GraphQL

### Smart Contract
* Solidity
* Truffle
* Ganache
* OpenZeppelin

## Features

* Create free NFTs using DALL-E AI and the Polygon network
* View created NFTs
* Buy and sell NFTs on NFT marketplaces

## Getting Started

### Prerequisites
* Node.js and npm installed
* Ganache installed (for local development)
* Truffle installed (for deploying smart contracts)

### Installation

1. Clone the repositories : 
```
    mkdir nalle
    cd nalle
    git clone https://github.com/onury5506/NALL-E_smart-contract.git
    git clone https://github.com/onury5506/NALL-E_backend.git
    git clone https://github.com/onury5506/NALL-E_frontend.git
```
2. Deploy the smart contract on local ganache network or main network.
3. Install dependencies and create .env file for backend
```
    cd NALL-E_backend
    npm i
```
.env file should be like .env.example
```
MONGODB_URL=...
PRODUCTION=...
WALLET_PRIVATE_KEY=...
OPENAI_API_KEY=...
AWS_ACCESS_KEY=...
AWS_SECRET_KEY=...
AWS_S3_BUCKET_NAME=...
CONTRACT_ADDRESS=...
WEB3_PROVIDER=...
```
4. Install dependencies and create .env file for frontend
```
    cd NALL-E_frontend
    npm i
```
.env.local file should be like this : 
```
GRAPHQL_SERVER=<backend service url>/graphql
CONTRACT_ADDRESS=...
NEXT_PUBLIC_GA_MEASUREMENT_ID=<google analytics id>
```
5. Start backend service
```
    cd NALL-E_backend
    npm run dev
```
6. Start frontend service
```
    cd NALL-E_frontend
    npm run dev
```

## License
This project is licensed under the MIT License. See the license file for details.