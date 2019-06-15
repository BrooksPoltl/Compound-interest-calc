import React, {useState} from 'react';
const compound = require('compound-interest')

function App() {
  const [data,setData] = useState({})
  const submitHandler = ()=>{ 

  }
  return (
    <div >
      <form>
        <p>initial value</p>
        <input/>
        <p>contribution frequency</p>
        <select>
          <option>monthly</option>
          <option>daily</option>
          <option>yearly</option>
        </select>
        <p>amount per period</p>
        <input/>
        <p>Interest rate</p>
        <input/>
        <p>Amount of years</p>
        <input/>
      </form>
    </div>
  );
}

export default App;
