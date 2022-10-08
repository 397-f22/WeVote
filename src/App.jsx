import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage.jsx'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Homepage/>      
    </div>

    
  ); 
};

export default App;
