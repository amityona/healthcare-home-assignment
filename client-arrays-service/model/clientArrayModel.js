const Joi = require("joi")
var axios = require('axios')
require('dotenv').config();

var min =process.env.Min;
var max = process.env.Max;

const vaildSchema = Joi.object().keys({ 
    number:Joi.number().required() // .min(1).max(1000) 

  }); 


const checkValidation = async (numberInput) =>{
    try {
    const { error, value }  = await vaildSchema.validateAsync({number:numberInput});
    if ((error === undefined) && (numberInput > process.env.Min) && (numberInput <= process.env.Max))
    {
        return true;
    }
    return false;
    }

    catch(err)
    {
        await postLog({array:[],message:err});
        return false;
    }
    // console.log(error)

}
const makeArray = async (number) =>{
    try {
    const answerArray = new Array(number - 1);
    for (let i=0;i<number-1;i++) // O(N)
    {
        answerArray[i] = number -1 -i; 
    }
    return answerArray;
    }
    catch(err)
    {
    //await postLog({array:[],message:err});
    return false;
    }
}


const postLog = async (body) =>{
    var loganswer = await axios.post(process.env.logUrl,body);

}

module.exports = { checkValidation,postLog,makeArray}