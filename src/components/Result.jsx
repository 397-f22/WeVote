import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Result = (data) => {
    const [voteCount, setVoteCount] = useState(0);
    const [electionRunning, setElectionRunning] = useState([true]);

    const handleChange = (event) => {
        setElectionRunning(false);
    };


    useEffect(() => {
        const interval = setInterval(() => setVoteCount(vc => vc + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return (    
        <div className="container">
            <h1>WeVote</h1> 
            
            <div className="electionCode">Code: 1316</div>

            <button type="button" className="btn btn-danger btn-rounded" onClick={handleChange}>End Election</button>

            <div className="vote-count">Total Votes: {voteCount}</div>

            <div className="winning">
                {electionRunning ? "" : "winner is Sara"}
            </div>
        </div>
    );
}
  
export default Result;