import './App.css';
import {useState,useEffect} from 'react';
//import env from "react-dotenv";
import axios from 'axios'

//const {URL_NUMBER_API} = env;

function App() {
  const [number,setNumber] = useState(1);

  const [data,setData] = useState([]);

  const submitHandler = async () =>{
    var numberParse = parseInt(number,10)
    await setData([]);
    try {
    var firstData = await axios.post("http://localhost:8000/arrayservice",{number:numberParse});
    console.log("Status "+firstData.status)
    if (firstData.status === 400)
    {
      obj="Errorr";
      
    }
   console.log(firstData.data)
    await setData(firstData.data.array)
  }
  catch(err)
  {
    console.log(err);
    alert("Errorr")
  }

  }
  var obj="";

   obj = data.map((element)=>{
    return <li>{element}</li>
  });


  return (
    <div className="App">
          Number : <input type='number' onChange={(e)=> {setNumber(e.target.value) }}/>
          <input type="button" value="Submit" onClick={()=>{submitHandler()}} />
          <ul>
            {obj}
          </ul>
    </div>
  );
}

export default App;
