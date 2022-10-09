import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";

const CreateElection = (data) => {
    console.log(data);
    const handleChange = (event) => {

    };

    const AddCandidate = () => {
        console.log("added candidate")
        return `
        <div className='createElectionField'>
            <label className="CreateElectionFieldsText">Candidate:</label>
            <input type="text" name="candidate"/>
        </div>
        `
    }

    return (    
        <div>
            <h1>WeVote</h1> 
            {/* ^^ replace with a navbar (topbar) that is consistents throughout pages */}
            <form className='createElectionFields'>
                <div className='createElectionField'>
                    <label className="CreateElectionFieldsText">Position: </label>
                    <input type="text" name="position"/>
                </div>

                <div className="createPositionField">
                    <div className='createElectionField'>
                        <label className="CreateElectionFieldsText">Candidate:</label>
                        <input type="text" name="candidate"/>
                    </div>

                    <div className='createElectionField'>
                        <label className="CreateElectionFieldsText">Candidate:</label>
                        <input type="text" name="candidate"/>
                    </div>

                    <button className="add-candidate m-1" onClick={AddCandidate}>Add Candidate</button>
                </div>

                <button className="add-position m-1" >Add Position</button>
                <button className="start-election m-1">Start Election</button>
            </form>
            
        </div>
    );
}
  
export default CreateElection;