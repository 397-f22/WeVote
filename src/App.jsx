import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Voting from './components/Voting';
import Homepage from './components/Homepage.jsx';
import Result from './components/Result.jsx';
import CreateElection from './components/CreateElection.jsx';


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

          <Route path="/create-election" element={
            <div>
              <CreateElection />
            </div>
          } />

          <Route path="/result" element={
            <div>
              <Result />
            </div>
          }/>

        </Routes>
      </BrowserRouter>

    </div>
  ); 
};

export default App;
