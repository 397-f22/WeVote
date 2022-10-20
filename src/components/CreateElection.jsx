import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { Position, Candidate } from './classes';
import { useDbUpdate } from "../utilities/firebase";
import { useState } from "react";

const CreateElection = (props) => {
    //TODO: The path below (/elections/234) is hard-coded, need to change to random code each time we create a new election
    //This function can be used for writing database. If the path is a new one, it will create a new record in database. If not, it will update the existing record.
    //Therfore it can be used for adding new item or updating item.

    const [update, result] = useDbUpdate(`/elections/${props.id}`);
    const [newPositionId, setNewPositionId] = useState(0)
    const [positions, setPositions] = useState([new Position("", newPositionId)]);

    const addPosition = () => {
        setNewPositionId(id => id++)
        setPositions([...positions, new Position("", newPositionId)])
    };

    const modifyPosition = (p) => {
        const positionsCopy = [...positions];
        setPositions([...positionsCopy.filter(pos => pos.role !== p.role), p]);
        console.log(positions)
    };

    const GoToResult = (id) => {
        window.location.href = `/result/${id}`;
    };

    // Here is the example of how to call the update fuction defined above.
    //TODO: need to change to values that users enter
    const submit = (id) => {
        update({
            "election_running": true,
            "position": positions[0].role,
            "candidates": positions[0].candidates
        });
        GoToResult(id);
    };

    
    const addPositionButtonStyle =
        {paddingRight:"100px", paddingLeft:"100px", marginBottom: "20px"};

    const addCandidateButtonStyle =
        {paddingRight:"100px", paddingLeft:"100px", marginBottom: "20px"};

    return (    
        <div className="create-election-container">
            <div className="create-election-fields">
                {positions.map(p => 
                    {
                        const addCandidate = () => {
                            p.addCandidate();
                            modifyPosition(p);
                        }

                        const updateRole = (event) => {
                            p.modifyRole(event.target.value);
                            modifyPosition(p);
                        };

                        return <div className="position" key={p.id}>
                            <p className="role-name">Role Name:</p>
                            <input type="text" className="input" value={p.role} onChange={updateRole}/>

                            {p.candidates.map((c, i) => 
                                {
                                    const updateCandidate = (event) => {
                                        p.modifyCandidate(i, event.target.value);
                                        modifyPosition(p);
                                    };

                                    return <div className="candidate" key={i}>
                                        <p className="candidate-name">Candidate Name:</p>
                                        <input type="text" className="input" value={c.name} onChange={updateCandidate}/>
                                    </div>
                                })}

                            <button className="btn btn-dark btn-rounded"
                                    style={addCandidateButtonStyle}
                                    onClick={addCandidate}>Add Candidate</button>
                        </div>}
                )}

                
                {/* <button className="btn btn-dark btn-rounded"
                        style={addPositionButtonStyle}
                        onClick={addPosition}>Add Position</button> */}
                
                <button className="btn btn-success btn-rounded btn-lg"
                        onClick={() => submit(props.id)}>Start Election</button>
            </div>
        </div>
    );
}
  
export default CreateElection;