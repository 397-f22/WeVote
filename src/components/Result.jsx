import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { useState } from 'react';

const Result = (data) => {
    const [voteCount, setVoteCount] = useState(0);
    const [electionRunning, setElectionRunning] = useState([true]);

    const handleChange = (event) => {
        setElectionRunning(false);
    };

    const interval = setInterval(() => setVoteCount(vc => vc + 1), 10000)

    console.log(interval);

    return (    
        <div>
            <div>Total Votes: {interval}</div>

            <button onClick={handleChange} >End Election</button>

            <div>
                {electionRunning ? "" : "winner is Sara"}
            </div>
        </div>
    );
}
  
export default Result;