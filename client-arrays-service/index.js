var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var arrayController = require('./controllers/clientArrayController')
require('dotenv').config();
var appRouter = express.Router()
var PORT = process.env.PORT || 8000 ;
var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())

app.use('/arrayservice',arrayController)


 app.get('/', async function(req, res) {
   res.json({message:"Client arrays service"});
 });

app.listen(PORT,()=>{
    console.log("The server is UP");
})