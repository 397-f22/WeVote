/*

import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import useState from 'react';

const Position = (data) => {

    const [candidates, setCandidates] = useState([]);
    const [candidateName, setCandidateName] = useState([]);

    const addCandidate = (candidateName) => {
        setCandidates([candidates, candidateName])
    }

    return (    
        <div>
            {candidates.map(candidate => <div>{candidate}</div>)}
            <label> className="CreateElectionFieldsText">Position: </label>

            <input type="text" name="position" />
            <TextInput></TextInput>
            <button onClick={addCandidate('test')} >+</button>
        </div>
    );
}
  
export default Position;

*/