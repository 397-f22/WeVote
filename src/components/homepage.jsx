import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Homepage = () => {
  const [joinId, setJoinId] = useState("");
  
  const goToVoting = () => {
    window.location.href = "/voting/"+joinId;
  }

  const goToElection = () => {
    var val = Math.floor(1000 + Math.random() * 9000);
    window.location.href = "/create-election/" + val;
  }

  const updateJoinId = (event) => {
    setJoinId(event.target.value);
  }

  return( 
    <div className="container">

      <div className="icon-div">
        <img src="https://i.imgur.com/dacVkoE.png" alt="voting icon"/>
      </div>

      <div className="enter-code-form">
        <form className="join-with-code">

          <div className="join-with-code-field">
            <label id="join-with-code-text" for="fname">Join With Code:</label>
            <input type="text" id="code" name="code" value={joinId} onChange={updateJoinId}/>
          </div>

          <div className="join-with-code-btn" style={{marginTop: "10px"}}>
            <button type="button" className="btn btn-dark btn-rounded btn-lg" style={{paddingRight:"100px", paddingLeft:"100px"}} onClick={goToVoting}>Join</button>
          </div>
        </form>
      </div>

      <div className='new-election-button'>
        {/* <button type="button" onClick={goToElection}>New Election</button> */}
        <button type="button" className="btn btn-dark btn-rounded" onClick={goToElection}>New Election</button>
      </div>
      
    </div>  
);
}

  



export default Homepage;