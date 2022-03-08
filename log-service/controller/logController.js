var express = require ('express')
var app = express();
var appRouter = express.Router()


/*   url: /logService/ 
      //body:  { }
*/

appRouter.route('/').post(async(req,resp)=>{
    console.log(req.body, `time: ${new Date()}`);
    resp.sendStatus(200);
})


module.exports = appRouter