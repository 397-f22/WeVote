const Homepage = () => ( 
    
    <div className="container">

      <h1 className="title">WeVote</h1>
      

      <div className='icon-div'>
        <img src="public\images\voting-icon.png" alt="voting icon"/>
      </div>

      <div className='enter-code-form'>
        <form className='join-with-code'>
          <label id="join-with-code-text" for="fname">Join With Code:</label>
          <input type="text" id="code" name="code"/>
        </form>
      </div>

      <div className='new-election-button'>
        <button type="button" onclick="alert('Button')">New Election</button>
      </div>
      
    </div>  
);

export default Homepage;