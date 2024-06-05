const { isUtf8 } = require('buffer');
const fs = require('fs');

let persona = {name: "Inigo", surname: "Montoya", age: 25}
let path  = 'path.json';

if(fs.existsSync(path)){
    fs.unlinkSync(path);
}

fs.writeFile(path, JSON.stringify(persona), (err)=>{
    if(err){
        console.log(err.message);
    }else{
        
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                console.log(err.message);
            }else{
                let prsn = JSON.parse(data);
                console.log(prsn);
            }
        });
    }
});

/*
fs.writeFileSync(path, JSON.stringify(persona));
let prsn = fs.readFileSync(path)
prsn = JSON.parse(prsn);
console.log(prsn);
*/


//-------------------------------//


//let data = "Hello. My name is " + persona.name +" "+ persona.surname + " You killed my father. Prepare to die.";
//let jpath = "jpath.json";

/*fs.writeFile(jpath, data, (err)=>{
    if (err){
        console.log(err.message);
    }else{
        console.log("data written successfully");
    }
})

if (fs.existsSync(jpath)){
    console.log("existe");
    let noBuffjpath = fs.readFileSync(jpath, 'utf-8');
    console.log(noBuffjpath.toString());

    setTimeout(function(){
        fs.unlinkSync(jpath)
    }, 3000)
}else{
    console.log("no existe");
}*/