import Web3 from "web3";
import contractInfo from "./contract-info.js";
import dotenv from "dotenv"
dotenv.config()

const web3 = new Web3("ws://127.0.0.1:7545")

const account = web3.eth.accounts.privateKeyToAccount(process.env.WALLET_PRIVATE_KEY)
web3.eth.accounts.wallet.add(account)
web3.eth.defaultAccount = account.address

export const contract = new web3.eth.Contract(contractInfo.abi,contractInfo.address)
export const accountAddress = account.address