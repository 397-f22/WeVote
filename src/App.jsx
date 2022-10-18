import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Voting from './components/Voting';
import Homepage from './components/Homepage.jsx';
import Result from './components/Result.jsx';
import Result_Voter from './components/Result_Voter.jsx';
import CreateElection from './components/CreateElection.jsx';
import { useDbData } from "./utilities/firebase";
import NavBar from './components/NavBar';

const ElectionForUrl = ({data}) => {
  const { id } = useParams();

  return <CreateElection id={id} data={data} />;
};

const ResultForUrl = ({data}) => {
  const { id } = useParams();

  return <Result id={id} data={data} />;
};

const VotingForUrl = ({data}) => {
  const { id } = useParams();

  return <Voting id={id} data={data} />;
};

const App = () => {
  const [data, error] = useDbData('/');
  const [electionRunning, setElectionRunning] = useState(true);
  const [winner, setWinner] = useState("");
  const [voteCount, setVoteCount] = useState(0);

  if (error) return <h1>Error loading election data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading election data...</h1>;
  if (!data) return <h1>No election data found</h1>;

  console.log(data);
  
  return (
    <div className="super-container">
    <NavBar /> 
    <div className="container">     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage />
            </div>
          }>

          </Route>
          <Route path="/voting/:id" element={
            <div>
              <VotingForUrl data={data} title={data.elections["1316"]} />
            </div>
          } />

          <Route path="/create-election/:id" element={
            <div>
              <ElectionForUrl data={data} />
            </div>
          } />

          <Route path="/result/:id" element={
            <div>
              <ResultForUrl data={data} electionRunning={electionRunning} voteCount={voteCount} winner={winner} setElectionRunning={setElectionRunning}/>
            </div>
          }/>

          <Route path="/result_voter/:id" element={
            <div>
              <Result_Voter electionRunning={electionRunning} voteCount={voteCount} winner={winner}/>
            </div>
          }/>

        </Routes>
      </BrowserRouter>

    </div>
    </div>
  ); 
};

export default App;
