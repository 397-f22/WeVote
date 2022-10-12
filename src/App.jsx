import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Voting from './components/Voting';
import Homepage from './components/Homepage.jsx';
import Result from './components/Result.jsx';
import CreateElection from './components/CreateElection.jsx';
import { useDbData } from "./utilities/firebase";


const App = () => {
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading election data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading election data...</h1>;
  if (!data) return <h1>No election data found</h1>;

  console.log(data);

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
