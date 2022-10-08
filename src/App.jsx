import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className='button-div'>
        <button type="button" onclick="alert('Button')">This is a button</button>
      </div>

      <div className='icon-div'>
        <img src="public\images\voting-icon.png" alt="voting icon"/>
      </div>

      <div className='form-div'>
        <form>
          <label for="fname">Insert text</label>
          <input type="text" id="fname" name="fname"/>
        </form>
      </div>
      
    </div>

    
  ); 
};

export default App;
