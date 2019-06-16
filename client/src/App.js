import React, {useState} from 'react';
const Finance = require('financejs');
const finance = new Finance();

function App() {
  const [data,setData] = useState({period: "12"})
  const [result, setResult] = useState(null)

  const changeHandler = (event)=>{ 
    setData({...data, [event.target.name]:event.target.value })
  }
  const submitHandler = () =>{
    data.initVal = Number(data.initVal);
    data.period = Number(data.period);
    data.amt = Number(data.amt);
    data.intRate = Number(data.intRate);
    data.years = Number(data.years)

    let principal = finance.CI(data.intRate,data.period,data.initVal,data.years)
    let intRate = data.intRate/data.period
    let periods = data.period*data.years
    let cashFlow = finance.FV(intRate,data.amt,periods)

    let result = cashFlow+principal
    console.log(result)
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
