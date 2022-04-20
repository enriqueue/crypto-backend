const express = require('express');
const cors = require('cors');
const path = require('path');

class Server {

    constructor() {
        this.app = express();
        // CRUD API
        this.path = '/api/users';
        // Middlewares
        this.middlewares();
        // Routes 
        this.routes();
    }

    middlewares() {
        // Parse
        this.app.use( express.json() );
        // Cors
        this.app.use( cors() );
        // Static files
        this.app.use(express.static( path.join(__dirname, '../public/dist/cryptoApp/') ));
    }

    routes() {
        this.app.use(this.path, require('../routes/routes'));
    }

    listen() {
        this.app.listen(process.env.PORT || 3000, ()  => {
            console.log(`Server up -> ${ process.env.PORT || 3000 }`);
        });
    }

}

module.exports = Server;