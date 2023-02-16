import mongoose from 'mongoose'
import {log, log_error} from '../utils/log.js'

const MONGODB_URL = process.env.MONGODB_URL

if(!MONGODB_URL){
    throw "MONGODB_URL NOT FOUND!"
}

export default function connectDB(){
    return mongoose.connect(MONGODB_URL).then(()=>{
        log("MongoDB Connected")
    }).catch((e)=>{
        log_error("MongoDB Connection Failed",e)
    })
}