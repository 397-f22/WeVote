import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Result_Voter = (props) => {
    return (    
        <div className="container">
            
            <div className="election-code">Code: 1316</div>

            {!props.electionRunning && <div className="winner-text">Winner is {props.winner}</div>}

            <div className="vote-count">Total Votes: {props.voteCount}</div>            
        </div>
    );
}
  
export default Result_Voter;