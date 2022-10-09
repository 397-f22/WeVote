const Homepage = () => {
  const goToVoting = () => {
    window.location.href = "/voting";
  }

  const goToElection = () => {
    window.location.href = "/create-election";
  }

  return( 
    <div className="container">

      <h1 className="title">WeVote</h1>

      <div className='icon-div'>
        <img src="public\images\voting-icon.png" alt="voting icon"/>
      </div>

      <div className='enter-code-form'>
        <form className='join-with-code'>
          <label id="join-with-code-text" for="fname">Join With Code:</label>
          <input type="text" id="code" name="code"/>
          <button type="button" onClick={goToVoting}>Join</button>
        </form>
      </div>

      <div className='new-election-button'>
        <button type="button" onClick={goToElection}>New Election</button>
      </div>
      
    </div>  
);
}

  



export default Homepage;