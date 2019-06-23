import React, {useState} from 'react';
import ResponseGraph from './ResponseGraph'

const compound = require('compound-interest-calc');

const  App = ()=> {
  const [data,setData] = useState({period: "12"})
  const [response, setResponse] = useState(null)
  const changeHandler = (event)=>{ 
    setData({...data, [event.target.name]:event.target.value })
  }
  const submitHandler = async() =>{
    data.initVal = Number(data.initVal);
    data.period = Number(data.period);
    data.amt = Number(data.amt);
    data.intRate = Number(data.intRate)/100;
    data.years = Number(data.years);

    let result = await compound(data.initVal,data.amt, data.years,data.intRate,data.period)
    console.log(result)
    setResponse({...result})
    return response
  }
  if(response){
    return(
      <ResponseGraph responseData = {response}/>
    )
  }
  return (
    <div >
      <form onSubmit = {submitHandler}>
        <p>initial value</p>
        <input 
        name = 'initVal'
        type = "number"
        onChange = {(event)=> changeHandler(event)} 
        value = {data.initVal}
        />
        <p>contribution frequency</p>
        <select 
          name = 'period' 
        type = "number"
          value = {data.period}
          onChange = {(event)=>changeHandler(event)}
          >
          <option value = "12">monthly</option>
          <option value = "365">daily</option>
          <option value = "1">yearly</option>
        </select>
        <p>amount per period</p>
        <input 
          name = 'amt'
        type = "number"
          onChange = {(event)=> changeHandler(event)}
          value = {data.amt} 
          />
        <p>Interest rate percentage</p>
        <input 
          name = 'intRate'
        type = "number"
          onChange = {(event)=> changeHandler(event)}
          value = {data.intRate}
          />
        <p>Amount of years</p>
        <input 
          name = 'years' 
          type = "number"
          onChange = {(event)=> changeHandler(event)} 
          value = {data.years}
          />
        <button 
          type = 'button'
          onClick = {submitHandler}
        >click me</button>
      </form>
    </div>
  );
}


export default App;
