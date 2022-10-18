import 'bootstrap/dist/css/bootstrap.min.css';

const Result = (props) => {
    const handleChange = (event) => {
        props.setElectionRunning(false);
    };

    return (    
        <div className="container">
            
            <div className="election-code">Code: 1316</div>

            {props.electionRunning ? <button type="button" className="btn btn-danger btn-rounded" style={{marginTop: "20px"}} onClick={handleChange}>End Election</button> :
             <div className="winner-text">Winner is {props.winner}</div>}

            <div className="vote-count">Total Votes: {props.voteCount}</div>            
        </div>
    );
}
  
export default Result;