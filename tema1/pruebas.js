const { log } = require('console');
const fs = require('fs');

let path = 'filepath.txt';
let data = "Hello World string";
let buf = Buffer.from('Hello world buffer', 'utf8');

//fs.writeFileSync(path, data);
//fs.writeFileSync(path, data, {flag:'a'});
//fs.writeFileSync(buf,data);

/*fs.writeFile(path, data, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("data written successfully");
    }
})*/

fs.writeFile(path, buf, {flag:'a'}, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("data written successfully");
    }
})

//readFile() - readFileSync()
//sale un buffer binario
let binrBuffer = fs.readFileSync(path);
console.log("Binari Buffer");
console.log(binrBuffer);

//convertimos buffer binario
let trnsfrmBuffer = fs.readFileSync(path, 'utf-8')
console.log("Binari Buffer");
console.log(trnsfrmBuffer);

//otra manera de convertir buffer binario
let otroTipo = fs.readFileSync(path);
console.log("esto que es????");
console.log(otroTipo.toString());

fs.readFile(path, 'utf-8', (err, data)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("No error");
        console.log(data);
    }
})
