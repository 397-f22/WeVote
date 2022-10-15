import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { Position, Candidate } from './classes';
import { useDbUpdate } from "../utilities/firebase";
import { useState } from "react";

const CreateElection = (data) => {
    console.log(data);
    //TODO: The path below (/elections/234) is hard-coded, need to change to random code each time we create a new election
    //This function can be used for writing database. If the path is a new one, it will create a new record in database. If not, it will update the existing record.
    //Therfore it can be used for adding new item or updating item.
    const [update, result] = useDbUpdate(`/elections/234`);
    const [positions, setPositions] = useState([new Position("President")]);

    const addPosition = () => {
        setPositions([...positions, new Position("")])
    };

    const modifyPosition = (p) => {
        const positionsCopy = [...positions];
        setPositions([...positionsCopy.filter(pos => pos.role !== p.role), p]);
    };

    // const updateCandidate = (event) => {
    //     modifyPosition(p);
    // }

    // const AddCandidate = () => {
    //     console.log("added candidate")
    //     return 
    //     <div className='createElectionField'>
    //         <label className="CreateElectionFieldsText">Candidate:</label>
    //         <input type="text" name="candidate"/>
    //     </div>
    // };

    const GoToResult = (event) => {
        event.preventDefault();
        window.location.href = "/result";
    };

    // Here is the example of how to call the update fuction defined above.
    //TODO: need to change to values that users enter
    const submit = (evt) => {
        evt.preventDefault();
        update({
            "position": "President",
            "candidates": {"Sara": 20, "Josh": 30}
        });
    };

    return (    
        <div className="create-election-container">
            
            <div className="create-election-fields">
                {/* <div className="position">
                    <label className="text">Position: </label>
                    <input type="text" name="position"/>
                </div>

                <div className="candidate-group">
                    <div className="candidate">
                        <label className="text">Candidate:</label>
                        <input type="text" name="candidate"/>
                    </div>

                    <div className="candidate">
                        <label className="text">Candidate:</label>
                        <input type="text" name="candidate"/>
                    </div>

                    <button className="btn btn-dark btn-rounded btn-sm" style={{marginBottom: "20px"}} onClick={AddCandidate}>Add Candidate</button>
                </div> */}

            

                {positions.map(p => 
                
                    {
                        const addCandidate = () => {
                            p.addCandidate()
                            modifyPosition(p)
                        }

                        return <div className="position" key={p}>
                        <div className="role">
                            {p.role}
                        </div>

                        <p className="role-name">Role Name:</p>
                        <input type="text" value={p.role} /*onChange={ NEED TO WRITE FUNCTION}*/></input>

                        {p.candidates.map((c, i) => 
                            {
                                const updateCandidate = (event) => {
                                    p.modifyCandidate(i, event.target.value)
                                    modifyPosition(p)
                                }

                                return <div className="candidate" key={c}>
                                <p className="candidate-name">Candidate Name:</p>
                                <input type="text" value={c.name} onChange={updateCandidate}></input>
                                
                            </div>})}
                        
                            <button className="btn btn-dark btn-rounded" style={{paddingRight:"100px", paddingLeft:"100px", marginBottom: "20px"}} onClick={addCandidate} >Add Candidate</button>
                    
                    </div>}

                )}

                <button className="btn btn-dark btn-rounded" style={{paddingRight:"100px", paddingLeft:"100px", marginBottom: "20px"}} onClick={addPosition} >Add Position</button>
                <button className="btn btn-success btn-rounded btn-lg" onClick={GoToResult}>Start Election</button>
            </div>
            
        </div>
    );
}
  
export default CreateElection;