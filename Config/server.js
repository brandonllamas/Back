const cors = require('cors')
const cowsay = require("cowsay");
const express = require('express');
const bodyParser = require('body-parser');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.routes()
    }

    routes() {
        
        this.app.use('/api/auth',require('../routes/auth/auth'))
        this.app.use('/api/app/ticket',require('../routes/app/ticket'))
        this.app.use('/api/app/user',require('../routes/app/user'))
        this.app.use('/api/app/param',require('../routes/app/param'))

        this.app.get('/api', (req, res) => {
            res.send('222')
        })

        this.app.get('*', (req, res) => {
            res.send('404')
        })
    }

    middleware() {

    }

    corsMiddleware() {
        const whitelist = ['http://example1.com', 'http://example2.com']
        var corsOptions = {
            origin: function (origin, callback) {
                if (whitelist.indexOf(origin) !== -1) {
                    callback(null, true)
                } else {
                    callback(new Error('Not allowed by CORS'))
                }
            }
        }

        this.app.use(cors(corsOptions))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.clear()
            console.log(cowsay.say({
                text: `El servidor esta corriendo en el puerto => ${this.port}`,
                e: "oO",
                T: "U "
            }));
        })
    }
}

module.exports = Server;