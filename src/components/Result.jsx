import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeVote from './WeVote';

const Result = (data) => {
    const [voteCount, setVoteCount] = useState(0);
    const [electionRunning, setElectionRunning] = useState([true]);

    const handleChange = (event) => {
        setElectionRunning(false);
    };


    useEffect(() => {
        if (electionRunning) {
            const interval = setInterval(() => setVoteCount(vc => vc + 1), 1000);
            return () => clearInterval(interval);
        }
    }, []);

    return (    
        <div className="container">
            <WeVote/>
            
            <div className="election-code">Code: 1316</div>

            {electionRunning ? <button type="button" className="btn btn-danger btn-rounded" style={{marginTop: "20px"}} onClick={handleChange}>End Election</button> :
             <div className="winner-text">Winner is Sara</div>}

            <div className="vote-count">Total Votes: {voteCount}</div>            
        </div>
    );
}
  
export default Result;