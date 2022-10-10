import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";

const CreateElection = (data) => {
    console.log(data);

    const AddCandidate = () => {
        console.log("added candidate")
        return 
        <div className='createElectionField'>
            <label className="CreateElectionFieldsText">Candidate:</label>
            <input type="text" name="candidate"/>
        </div>
    }

    const GoToResult = (event) => {
        event.preventDefault();
        window.location.href = "/result";
        
    }

    return (    
        <div className="create-election-container">
            <h1>WeVote</h1> 
            {/* ^^ replace with a navbar (topbar) that is consistents throughout pages */}
            <form className='create-election-fields'>
                <div className='create-election-position'>
                    <label className="create-election-position-text">Position: </label>
                    <input type="text" name="position"/>
                </div>

                <div className="create-election-candidate-group">
                    <div className='create-election-candidate'>
                        <label className="create-election-candidate-text">Candidate:</label>
                        <input type="text" name="candidate"/>
                    </div>

                    <div className='create-election-candidate'>
                        <label className="create-election-candidate-text">Candidate:</label>
                        <input type="text" name="candidate"/>
                    </div>

                    <button className="btn btn-dark btn-rounded btn-sm" style={{marginBottom: "20px"}} onClick={AddCandidate}>Add Candidate</button>
                </div>

                <button className="btn btn-dark btn-rounded" style={{paddingRight:"100px", paddingLeft:"100px", marginBottom: "20px"}} >Add Position</button>
                <button className="btn btn-success btn-rounded btn-lg" onClick={GoToResult}>Start Election</button>
            </form>
            
        </div>
    );
}
  
export default CreateElection;