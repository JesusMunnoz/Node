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
            //fs.writeFileSync(pathR3, JSON.stringify(persona));

            /*
            let prsn = fs.readFile(pathR3);
            //let prsn = fs.readFileSync(pathR3);
            prsn = JSON.parse(prsn);
            console.log("linea 32");
            console.log(prsn);
            */
        });
    });
});