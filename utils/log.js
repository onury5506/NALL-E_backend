export function log(...args){
    console.log(new Date()," ----> ",...args)
}

export function log_error(...args){
    console.error(new Date()," ----> ",...args)
}