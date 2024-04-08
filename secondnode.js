import {readFile,writeFile} from "./firstnode.js";

async function run(){
    try{
        const instance = Date.now()
        await writeFile(instance+'.txt','hello '+instance);
        const data = await readFile(instance+'.txt')
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

run()