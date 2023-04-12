const express = require('express');
const cors = require('cors'); 

class App{

    constructor(){
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();
    }

    database(){
        require('./database');
    }

    middlewares(){
        this.express.use(express.json());
        this.express.use(cors({
            origin: 'http://localhost:3000'
          }));
    }

    routes(){
        require('./app/routes/index')(this.express);
    }
}

module.exports = new App().express;