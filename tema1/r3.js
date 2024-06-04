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
            console.log("linea 22");
            console.log(persona);

            fs.writeFileSync(pathR3, JSON.stringify(persona));

            let prsn = fs.readFileSync(pathR3);
            prsn = JSON.parse(prsn);
            console.log("linea 29");
            console.log(prsn);
        })
    })
    
})