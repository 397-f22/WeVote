import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Voting from './components/Voting';
import Homepage from './components/homepage.jsx'

const data = [
  {
    position: "President",
    candidates: ["Sara", "Josh"]
  }
]

const App = () => {
  return (
    <div className="container">      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage />
            </div>
          }>

          </Route>
          <Route path="/voting" element={
            <div>
              <Voting title={data[0]} />
            </div>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  ); 
};

export default App;
