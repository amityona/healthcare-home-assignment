var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var logService = require('./controller/logController')
var appRouter = express.Router()
require('dotenv').config();

var PORT = process.env.PORT || 8001 ;
var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())

app.use('/logservice',logService)


 app.get('/', async function(req, res) {
   res.json({message:"Log service"});
 });

app.listen(PORT,()=>{
    console.log("The server is UP");
})