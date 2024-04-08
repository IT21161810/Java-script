import fs from 'fs'

function readFile(filename){
    return new Promise((resolve,reject) => {
        fs.readFile(filename,(err,data) => {
            if(err){
                reject(err)
                return
            }

            resolve(data.toString())
        })
    })
}

function writeFile(filename,data){
    return new Promise((resolve,reject) => {
        fs.writeFile(filename,data,(err,data) => {
            if(err){
                reject(err)
                return
            }
            resolve()
        })
    })
}

export default {readFile,writeFile}