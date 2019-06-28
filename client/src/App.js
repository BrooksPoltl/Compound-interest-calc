import React, {useState} from 'react';
import ResponseGraph from './ResponseGraph'
import './styles/App.css'

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
    <div className = 'container' >
      <h1>Compound Interest Calculator</h1>
      <form  className ='form' onSubmit = {submitHandler}>
        <p className = 'text'>initial value</p>
        <input
        className = 'input'
        name = 'initVal'
        type = "number"
        onChange = {(event)=> changeHandler(event)} 
        value = {data.initVal}
        />
        <p className = 'text'>contribution frequency</p>
        <select 
          className = 'dropdown'
          name = 'period' 
          type = "number"
          value = {data.period}
          onChange = {(event)=>changeHandler(event)}
          >
          <option value = "12">monthly</option>
          <option value = "365">daily</option>
          <option value = "1">yearly</option>
        </select>
        <p className = 'text'>amount per period</p>
        <input 
          className = 'input'
          name = 'amt'
          type = "number"
          onChange = {(event)=> changeHandler(event)}
          value = {data.amt} 
          />
        <p className = 'text'>Interest rate percentage</p>
        <input 
          className = 'input' 
          name = 'intRate'
          type = "number"
          onChange = {(event)=> changeHandler(event)}
          value = {data.intRate}
          />
        <p className = 'text'>Amount of years</p>
        <input 
          className = 'input'
          name = 'years' 
          type = "number"
          onChange = {(event)=> changeHandler(event)} 
          value = {data.years}
          />
        <button 
          className = 'button'
          type = 'button'
          onClick = {submitHandler}
        >Submit</button>
      </form>
    </div>
  );
}


export default App;
