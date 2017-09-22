const app = require('express')(),
bodyParser = require('body-parser'),
cors = require('cors'),
massive = require('massive'),
port = 8080;


require('dotenv').config();

const ctrl = require('./controller/controller');


app.use(bodyParser.json());
app.use(cors());



massive(process.env.CONNECTION_STRING).then((db) => {
app.set('db', db);
})