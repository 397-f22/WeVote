import 'bootstrap/dist/css/bootstrap.min.css';


const Homepage = () => {
  const goToVoting = () => {
    window.location.href = "/voting";
  }

  const goToElection = () => {
    window.location.href = "/create-election";
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
            <input type="text" id="code" name="code"/>
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