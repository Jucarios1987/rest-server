// Archivo en el que se configuran los eventos que se dispara en cada una de las rutas configuradas en el archivo "usuarios.js" de la carpeta "routes"
const {response, request} = require('express'); 

const usuariosGet = (req = request, res = response) => {

    // A continuacion realizaremos un queri en la peticion "GET" para lo cual enviaremos unos parametros que son opcionales
    // Forma 1: A continuacion retornamos el "body" como un objeto JSon completo
    //const query = req.query;
    // Forma 2: Desestructuramos lo que necesitamos del "Body" asi
    const {q = 'No Query', nombre = 'No name', apikey = 'No API Key', page = 10, limit = 'No Limit'} = req.query;


    // Normalmente en las peticiones get se envian objetos como en el siguiente ejemplo
    // La propiedad "status" hace que se muestre un codigo pre determinado en la respuesta de la aplicacion, nos permite manejar validaciones.
    //res.status(403).json({
    res.json({
        // Este "ok" es opcional por que el esttus de la peticion me retorna esta informacion.
        ok: true,
        msg: 'get API - usuariosGet Controller',
        //query
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res) => {
    
    // Mapeamos el parametro "id" que se establecion en la ruta del "PUT" y se obtubo de la ruta del archivo "usuarios.js"
    const id = req.params.id;

    // Se establece que por defecto al hacer una peticion "PUT" esta ruta retorne el codgigo 400
    //res.status(400).json({
    res.status(400).json({
        msg: 'put API - usuariosPut Controller',
        // Mostramos el "id" que obtubimos de la ruta de la peticion. 
        id
    });
}

const usuariosPost = (req, res) => {
    
    // NOTA: Cuando desestructuramos solo obtenemos lo que necesito del "body", si traemos el "body" obtenemos el objeto completo.
    // Forma 1: A continuacion retornamos el "body" como un objeto JSon completo
    //const body = req.body;
    // Forma 2: Desestructuramos lo que necesitamos del "Body" asi
    const {nombre, edad} = req.body;
    

    // Se establece que por defecto al hacer una peticion "POST" esta ruta retorne el codgigo 201
    res.json({
    //res.status(201).json({
        msg: 'post API - usuariosPost Controller',
        //body
        // A cotinuacion estraemos cada una de las propiedades que necesitamos del JSon
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    // Se establece que por defecto al hacer una peticion "DELETE" esta ruta retorne el codgigo 501
    res.status(501).json({
        msg: 'delete API - usuariosDelete Controller'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - usuariosPatch Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}