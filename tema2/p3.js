const  fs = require("fs/promises")

async function readWrite(obj){
    try{
        await fs.writeFile("personaAsyncAwait.json", JSON.stringify(obj));
        let nuevo = await fs.readFile("personaAsyncAwait.json", "utf-8")
        console.log(JSON.parse(nuevo));
    }
    catch(error){
        console.log(error);
    }
    
}

let myObj = { nombre:"J", apellido: "MP", edad:35}
readWrite(myObj);