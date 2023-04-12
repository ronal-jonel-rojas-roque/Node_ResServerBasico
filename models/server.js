const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
      this.app = express();
      this.port = process.env.PORT
      this.usuariosRoutePath = '/api/usuarios';

    //Midelwares (funciones que añaden otra funcionalidada a la web server)
        this.middlewares();
   
        //Rutas de mi aplicacion
      this.routes();
    }

    middlewares(){
        //CORS
       this.app.use(cors());

       //Lectura y Parseo  del body
       this.app.use(express.json());
        //directorio Público
        this.app.use(express.static('public'));
    }

    routes() { 
        //midelware condicional
       this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }

    listen(){  
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;