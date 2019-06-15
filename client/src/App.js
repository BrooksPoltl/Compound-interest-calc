import React, {useState} from 'react';
const compound = require('compound-interest')

function App() {
  const [data,setData] = useState({period: "12"})
  const changeHandler = (event)=>{ 
    setData({...data, [event.target.name]:event.target.value })
  }
  const submitHandler = () =>{
    data.initVal = Number(data.initVal);
    data.period = Number(data.period);
    data.amt = Number(data.amt);
    data.intRate = Number(data.intRate);
    data.years = Number(data.years)
    const opts = {
      initial: data.initVal,
      monthly: data.amt,
      interest:data.intRate,
      compound: data.period,
      years: data.years
    };
    const result = compound(opts);
    console.log(result)
    const graph = compound.verbose(opts);
    console.log(graph)
  }
  return (
    <div >
      <form>
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
