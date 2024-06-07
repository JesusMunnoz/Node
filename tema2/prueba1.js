const fs = require('fs/promises');

// Promesa
function metodoPromesa(valor){
    let promesaPrueba = new Promise((resolve, reject)=>{
        if (valor){
            let result = {ok: true, message: "Promesa Correcta"}
            resolve(result)
        }else{
            let error = {ok: false, message: "Promesa Incorrecta"}
            reject(error)
        }
    })
    return promesaPrueba;
}

metodoPromesa(true)
.then (result => {
    console.log(result);
})

.catch (error => {
    console.log(error);
})

//                      ----------------                      //

function metodoCallBack(valor, callBack){
    if (valor){
        return callBack(null, "callback verdadera")
    }else{
        return callBack(new Error("error valor falso"), null)
    }
}

metodoCallBack(true, (error, result)=>{
    if (error){
        console.log(error);
    }else{
        console.log(result);
    }
})

// -------------  DUDAS  -------------------
/*
¿Por que me sale la callback y luego la promesa?

callback verdadera
{ ok: true, message: 'Promesa Correcta' }
*/

// ¿cual es la diferencia entre readfile/writefile y readfileSync/writefileSync?

// diferencia entre utf8 y utf-8