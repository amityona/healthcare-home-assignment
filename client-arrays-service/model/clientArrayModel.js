const Joi = require("joi")
var axios = require('axios')
require('dotenv').config();

var min =process.env.Min;
var max = process.env.Max;

const vaildSchema = Joi.object().keys({ 
    number:Joi.number().required() // .min(1).max(1000) 

  }); 


const checkValidation = async (numberInput) =>{ 
    //return new Promise(async (resolve,reject)=>{
    return await new Promise(async (res,rej)=>{
        try{
    const { error, value }  =  await vaildSchema.validateAsync({number:numberInput});
 
    if ((error === undefined) && (numberInput > process.env.Min) && (numberInput <= process.env.Max))
    {

       res(true)
    }
    else
    {
    //await postLog({array:[],message:"bad input"});
     res(false)
    }
}
catch(err)
{
    res(false);
}

});

} 
const makeArray =  (number) =>{
    return  new Promise((res,rej)=>{
    try {
    const answerArray = new Array(number - 1);
    for (let i=0;i<number-1;i++) // O(N)
    {
        answerArray[i] = number -1 -i; 
    }
    res(answerArray);
    }
    catch(err)
    {
    rej(false);
    }
});
}


const postLog = async (body) =>{
    var loganswer = await axios.post(process.env.logUrl,body);

}

module.exports = { checkValidation,postLog,makeArray}