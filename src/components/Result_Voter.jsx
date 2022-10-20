import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const findWinnerMajorityVote = (data, id) => {
    const candidates = data.elections[id].candidates;
    var voteCounts = []
    
    //loop through to find highest vote count
    for (var i = 0; i < candidates.length; i++) {
        voteCounts.push(candidates[i].voteCount);
    }

    var winners = []
    var maxVotes = Math.max(...voteCounts)
    //loop through again to get all candidates with highest vote count
    for (var j = 0; j < candidates.length; j++) {
        if (candidates[j].voteCount == maxVotes) {
            winners.push(candidates[j].name);
        }
    }
    // console.log(winners);
    return winners.join(", ");
}

const getVoteCount = (data) => {
    // console.log(typeof(data.candidates))
    const candidates = data.candidates;
    var voteCount = 0;
    
    //loop through to find  vote count
    for (var i = 0; i < candidates.length; i++) {
        voteCount += candidates[i].voteCount;
    }

    return voteCount;
}

const Result = (props) => {
    return (    
        <div className="container">
            <div className="election-code">Code: {props.id}</div>

            <h1 style={{marginTop: "10px"}}>Thank you for voting!</h1>

            {!props.data.elections[props.id].election_running &&
             <div className="winner-text">Winner is {findWinnerMajorityVote(props.data, props.id)}</div>}

            <div className="vote-count">Total Votes: {getVoteCount(props.data.elections[props.id])}</div>            
        </div>
    );
}
  
export default Result;