import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";

const Voting = (data) => {
    console.log(data);
    const goToResult = (event) => {
        window.location.href = "/result";
    };

    return (    
        <div>
            <h1>Position: {data.title.position}</h1>

            <div>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Candidate</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        {
                            Object.values(data.title.candidates).map((candidate) =>
                            {
                                console.log(candidate);
                                return (
                                    <FormControlLabel key={candidate} value={candidate} control={<Radio />} label={candidate} />
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
                    onClick={goToResult}> Cast Vote </Button>
            </div>

            
        </div>
    );
}
  
export default Voting;