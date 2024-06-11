const fs = require('fs/promises');

let persona = {name: "Inigo", surname: "Montoya", age: 25}
let path  = 'path.json';

async function asyncAwait(){
    try{
        await fs.writeFile(path, JSON.stringify(persona));

        let data = await fs.readFile(path, 'utf-8');
        console.log(JSON.parse(data));
    }

    catch (error){
        console.log(error);
    }

}

asyncAwait();