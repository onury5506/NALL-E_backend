import Web3 from "web3";
import contractInfo from "./contract-info.js";

const web3 = new Web3(process.env.WEB3_PROVIDER)

const account = web3.eth.accounts.privateKeyToAccount(process.env.WALLET_PRIVATE_KEY)
web3.eth.accounts.wallet.add(account)
web3.eth.defaultAccount = account.address

export const contract = new web3.eth.Contract(contractInfo.abi,contractInfo.address)
export const accountAddress = account.address