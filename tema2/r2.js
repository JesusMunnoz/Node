const { error } = require('console');
const { unlink } = require('fs');
const fs = require('fs/promises');

let persona = {name: "Inigo", surname: "Montoya", age: 25}
let path  = 'path.json';


fs.access(path)
.then (()=>{
    fs.unlink(path);
    console.log("borro pues existe");
})
.catch(()=>{
    console.log("nada que borrar");
})

.then(() => {
    console.log("escribo");
    return fs.writeFile(path, JSON.stringify(persona));
})
.then(() => {
    console.log("leo");
    return fs.readFile(path, 'utf-8')
})
.then(data => {
    console.log(JSON.parse(data));
})

.catch(err => {
    console.log("ERROR", err);
})


/*if(fs.exists(path)){
    fs.unlinkSync(path);
    console.log("borro porque existe");
}*/

/*fs.writeFile(path, JSON.stringify(persona), (err)=>{
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
});*/