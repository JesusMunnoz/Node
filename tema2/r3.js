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

function readWrite(){
    let persona = {name: "", surname: "", age: ""};
    let pathR3 = 'pathR3.json';

    fs.access(pathR3)
    .then(() => fs.unlink(pathR3))

    .then (() =>{
        return pregunta("What's your name? ");
    })

    .then ((answerN) =>{
        persona.name = answerN;
        return pregunta("whats your surname? ")
    })

    .then ((answerSN) =>{
        persona.surname = answerSN;
        return pregunta("whats your age? ")
    })

    .then ((answerAge) =>{
        persona.age = parseInt(answerAge, 10);

        console.log(persona);
        return fs.writeFile(pathR3, JSON.stringify(persona))
    })

    .then(() => fs.readFile(pathR3, 'utf-8'))
    .then((personita) => {
        console.log(JSON.parse(personita));
    })

    .catch((error) => {
        console.log(error.message);
    });
}

readWrite();