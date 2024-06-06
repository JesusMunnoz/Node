const { isUtf8 } = require('buffer');
const fs = require('fs/promises');
const readline = require('readline');

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            //resolve(respuesta);
            //rl.close()
            if (pregunta){
                resolve(respuesta)
            }else{
                reject(error)
            }
            rl.close()
        });
    });
    return question;
}


async function readwrite(){
    let persona = {name: "", surname: "", age: ""};
    let pathR3  = 'pathR3.json';

    try{
        /*fs.existsSync(pathR3) 
        .then(() => {
            fs.unlinkSync(pathR3);
            console.log("borro porque existe");
        })*/

        if(fs.access(pathR3)){
            await fs.unlink(pathR3)
            console.log("borro porque existe");
        }

        
        let answerN = await pregunta("What's your name? ");
        persona.name = answerN;

        let answerSN = await pregunta("What about your surname? ");
        persona.surname = answerSN;

        let answerAge = await pregunta(`And  your age Mr/Miss ${persona.surname},\n How old are you? `);
        persona.age = parseInt(answerAge, 10);

        console.log("linea 38");
        console.log(persona);

        await fs.writeFile(pathR3, JSON.stringify(persona));
        let personita = await fs.readFile(pathR3, 'utf-8')
        console.log("linea 43");
        console.log(JSON.parse(personita));
    }
    catch(error){
        console.log(err.message);
    }

}

readwrite();


/*
const { isUtf8 } = require('buffer');
const fs = require('fs');

const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let persona = {name: "", surname: "", age: ""};
let pathR3  = 'pathR3.json';

if(fs.existsSync(pathR3)){
    fs.unlinkSync(pathR3);
    console.log("borro porque esxiste");
}

rl.question("What's your name? ", (answerN)=>{
    persona.name = answerN;

    rl.question("What about your surname? ", (answerSN)=>{
        persona.surname = answerSN;
    
        rl.question(`And  your age Mr/Miss ${persona.surname},\n How old are you? `, (answerAge)=>{
            persona.age = parseInt(answerAge, 10);
            console.log("linea 23");
            console.log(persona);

            fs.writeFile(pathR3, JSON.stringify(persona), (err)=>{
                if(err){
                    console.log(err.message);
                }else{
                    fs.readFile(pathR3, 'utf-8', (err, data)=>{
                        if(err){
                            console.log(err.message);
                        }else{
                            let prsn = JSON.parse(data);
                            console.log("linea 35");
                            console.log(prsn);
                            rl.close();
                        }
                    });
                };
            });
        });
    });
});
*/