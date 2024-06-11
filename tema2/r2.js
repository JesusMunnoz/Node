const { error } = require('console');
const { unlink } = require('fs');
const fs = require('fs/promises');

let persona = {name: "Inigo", surname: "Montoya", age: 25}
let path  = 'path.json';

fs.writeFile(path, JSON.stringify(persona))
.then(() => {
    return fs.readFile(path, 'utf-8')
})
.then(data => {
    console.log(JSON.parse(data));
})
.catch(err => {
    console.log("ERROR", err);
})