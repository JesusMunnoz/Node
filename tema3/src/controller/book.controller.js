const Book = require("../models/book");

//let mybk = new Book ("The Hobbit", "Kindle", "J.R.R. Tolkien", 10, "https://www.planetadelibros.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg", 7, 1);

let arrBooks = [];

function getBook (req, res){
    res.json(arrBooks);
};

function createBook (req, res) {
    let {title, type, author, price, photo, id_book, id_user} = req.body;
    let newBook = new Book (title, type, author, price, photo, id_book, id_user);
    arrBooks.push(newBook);
    res.status(201).json(newBook);
};

function updateBook (req, res) {
    let {id} = req.params;
    let {title, type, author, price, photo} = req.body;
    let bookIndex = arrBooks.findIndex(book => book.id_book == parseInt(id));
    if(bookIndex != -1) {
        arrBooks[bookIndex].title = title;
        arrBooks[bookIndex].type = type;
        arrBooks[bookIndex].author = author;
        arrBooks[bookIndex].price = price;
        arrBooks[bookIndex].photo = photo;

        res.json(arrBooks[bookIndex])
    }else{
        res.status(404).json({message:"error, libro no encontrado"});
    }
};

function deleteBook (req, res) {
    let {id} = req.params;
    let bookIndex = arrBooks.findIndex(book => book.id_book == parseInt(id));
    if (bookIndex != -1){
        let deleteBook = arrBooks.splice(bookIndex, 1);
        
        res.json(deleteBook[0]);
    }else{
        res.status(404).json({message:"error, libro no encontrado"});
    }
};

module.exports = {getBook, createBook, updateBook, deleteBook}


/*
let usuario = null; //{nombre: "Jose", apellidos: "Garcia Garcia"}

function getStart(request, response)
{
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}


// function getUser(request, response)
// {
//     let respuesta;
//     if (usuario != null) 
//         respuesta = usuario;
//     else
//         respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"}
    
//     response.send(respuesta);   
// }

function getUser(request, response)
{
    let name = request.query.name;
    let respuesta;

    if (usuario != null && (!name || name === usuario.nombre))
        respuesta = {error: false, codigo: 200, data: usuario}

    else 
        respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"}

    response.send(respuesta);      
}

function getUser2(request, response)
{
 let name = request.params.name
 if (usuario != null && name === usuario.nombre) 
     response.send({error: false, codigo: 200, data: usuario});    
 else  
     response.send({error: true, codigo: 200, mensaje: "El usuario no existe"});      
}



function postUser(request, response)
{
    let respuesta; 
    console.log(request.body)
    if (usuario === null)
    {
        usuario     = {nombre: request.body.data1, 
                       apellidos: request.body.data2}
        
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Usuario creado',data: usuario};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'Usuario ya existe'};

    response.send(respuesta);
}

function putUser(request, response)
{
    let respuesta
    if (usuario !=  null)
    {
        usuario.nombre      = request.body.nombre1;
        usuario.apellidos   = request.body.apellido1;
        respuesta           = {error: false, codigo: 200, 
                                mensaje: 'Usuario actualizado',data: usuario};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El usuario no existe',data: usuario};

    response.send(respuesta);
};

function deleteUser(request, response)
{
    let respuesta
    if (usuario != null)
    {    
        usuario     = null;
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Usuario borrado',data: usuario};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El usuario no existe',data: usuario};

    response.send(respuesta);
};

module.exports = {getStart, getUser, getUser2, postUser, putUser, deleteUser};
*/