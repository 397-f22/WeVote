import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>
      <button type="button" onclick="alert('Button')">This is a button</button>
      <form>
      <label for="fname">Insert text</label>
      <input type="text" id="fname" name="fname">
        </form>
      </h2>
    </div>
  ); 
};

export default App;
