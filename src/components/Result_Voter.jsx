import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart } from 'react-minimal-pie-chart'

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
             <div className="winner-text">Winner is {findWinnerMajorityVote(props.data, props.id)}</div> &&
            <PieChart //Source: https://www.npmjs.com/package/react-minimal-pie-chart
                data={piechartResultsData(props.data.elections[props.id].candidates)}
                label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
                labelStyle={{...defaultLabelStyle,}}
            />
            }
            <div className="vote-count">Total Votes: {getVoteCount(props.data.elections[props.id])}</div>            
        </div>
    );
}
  
export default Result;


//input props.data.elections[props.id].candidates to this function
const piechartResultsData = (candidate_list) => {
    return candidate_list.map((el) => ({title: el.name, value: el.voteCount, color: random_hex_color_code(), label:"AAAAAA"}))
}

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
  };