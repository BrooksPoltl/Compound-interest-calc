import React, {useState} from 'react';
const compound = require('compound-interest')

function App() {
  const [data,setData] = useState({})
  return (
    <div >
      <form>
        <label>initial value</label>
        <input/>
        <label>contribution frequency</label>
        <select>
          <option>monthly</option>
          <option>daily</option>
          <option>yearly</option>
        </select>
        <label>amount per period</label>
        <input/>
        <label>Interest rate</label>
        <input/>
        <label>Amount of years</label>
        <input/>
      </form>
    </div>
  );
}

export default App;
