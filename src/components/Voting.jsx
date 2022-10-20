import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { useState } from "react";
import { useDbUpdate } from "../utilities/firebase";

const Voting = (props) => {
    const [selectedCandidate, setSelectedCandidate] = useState(0); //index
    const [update, result] = useDbUpdate(`/elections/${props.id}/candidates/${selectedCandidate}`);
    
    const voteWrap = () => {
            // window.location.href = "/result_voter";
            console.log("selectedCandidate", selectedCandidate);
            var selectedCandidateVoteCount = props.data.elections[props.id].candidates[selectedCandidate].voteCount + 1;

            update({
                "voteCount": selectedCandidateVoteCount
            });

            // const submitVote = (evt) => {
            //     evt.preventDefault();
            //     update({
            //         "election_running": true,
            //         "position": positions[0].role,
            //         "candidates": positions[0].candidates
            //     });
            // };
        }

    const radioButtonPressed = (idx) => {
        setSelectedCandidate(idx)
        console.log("THE INDEX IS", idx, "STATE IS", selectedCandidate)
    }

    return (    
        <div>
            <h1>Position: {props.data.elections[props.id].position}</h1>

            <div>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Candidate</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        {
                            props.data.elections[props.id].candidates.map((candidate, idx) =>
                            {
                                // console.log(candidate);
                                return (
                                    <FormControlLabel key={candidate.name} 
                                                      value={candidate.name} 
                                                      control={<Radio />} 
                                                      label={candidate.name}
                                                      onChange={() => radioButtonPressed(idx)} />
                                )
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </div>

            <div>
                <Button
                    variant="outlined" size="large"
                    sx={{
                        width: "60%",
                        color: "black",
                        border: "2px solid !important",
                        borderRadius: "20px!important",
                    }}
                    onClick={() => voteWrap(props)}> Cast Vote </Button>
            </div>

            
        </div>
    );
}
  
export default Voting;