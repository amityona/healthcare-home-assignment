var express = require ('express')
var model = require("../model/clientArrayModel")
var axios = require('axios')
var app = express();
var appRouter = express.Router()


/*   url: /arrayservice/ 
      body:  { input :  number (min - max) }
*/

appRouter.route('/').post(async(req,resp)=>{
    const number = req.body.number;
   var statusValid = await model.checkValidation(number)
   //console.log("valid " +statusValid);
   if (statusValid)
   {
       var responseArray = await model.makeArray(number)
       model.postLog({array:responseArray});
       return resp.json({array:responseArray}); 
    }

    else
    {
        model.postLog({array:responseArray,message:"Bad Input"});
    return resp.status(400).json({array:[], meesage:"Problem Input"})
    }
})


module.exports = appRouter