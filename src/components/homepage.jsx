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

      <h1 className="title">WeVote</h1>

      <div className='icon-div'>
        {/* <img src="public\images\voting-icon.png" alt="voting icon"/> */}
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzE5Ljk1IDI1NC44Yy0xLjM0MzggMC42NzE4Ny0yLjUxNTYgMS41MTE3LTMuNTIzNCAyLjY4MzYtMTEuMjQyIDE0LjA5NC0xNy4xMTcgMzQuMjMtMjEuNDggNTUuMzc1LTQuMDI3MyAyMC4xMzctNi4yMDcgNDEuMjgxLTguNTU4NiA1OS40MDJsLTc0LjE2OCA5Mi45NjVjLTIuODUxNiAzLjY5MTQtMi4zNDc3IDkuNzM0NCAxLjE3NTggMTIuOTIybDc1LjE3NiA2OC40NjUtNzguMzYzLTAuMzM1OTR2MTguOTYxbDI4NC4wOSAwLjE2Nzk3di0xOC43OTNoLTEzMi40bDEwNi4zOS0xMjEuMzJjMy4xODc1LTMuNTIzNCAyLjg1MTYtOS4zOTg0LTAuNTAzOTEtMTIuNzU0bC0yOC41MjctMjguNTIzYzUuMjAzMS00LjUzMTIgMTAuMDY2LTkuMjMwNSAxNC4yNjItMTMuOTMgMTIuNDE4LTE0LjI2MiAyMC4xMzctMzEuMjExIDIxLjQ4LTUzLjY5OWw2MS43NTQtMjkuNzAzYzMuMDE5NS0xLjY3OTcgNS4wMzUyLTUuMDM1MiA1LjAzNTItOC41NTg2di04MS4wNTFjLTAuMTY3OTctNC42OTE0LTQuMTk1My04Ljg4NjctOC43MjY2LTkuMjIyNy04MS4zODctOS41NjY0LTE1Mi4zNyAzNy41ODYtMjEzLjExIDY2Ljk1M3ptMjguNTI3IDcwLjE0MSAzMy4zOTUgMzMuMjI3Yy05LjM5ODQgMTAuNzM4LTE4Ljk2MSAyMC44MDktMjUuODQ0IDI5Ljg3MS05LjA2MjUgMTEuMjQyLTEzLjQyNiAyNi42OC01LjcwNyAzNy45MjIgMTYuNjEzIDEzLjc2MiAzNi43NSA0LjAyNzMgNTEuMDEyLTkuMjMwNSA3Ljg4NjctNy4wNDY5IDE2LjYxMy0xNC4wOTQgMjMuODI4LTIwLjEzN2wyMi45ODggMjIuOTg4LTExMS40MiAxMjcuMDNoLTIwLjEzN2wtODQuMDY2LTc2LjY4NGMzOC43NjYtNDguNDk2IDc3LjUyNy05Ni40ODggMTE1Ljk1LTE0NC45OHoiLz4KPC9zdmc+Cg==" alt="voting icon"/>
      </div>

      <div className='enter-code-form'>
        <form className='join-with-code'>
          <label id="join-with-code-text" for="fname">Join With Code:</label>
          <input type="text" id="code" name="code"/>
          <button type="button" className="btn btn-dark btn-rounded btn-lg" style={{paddingRight:"100px", paddingLeft:"100px"}} onClick={goToVoting}>Join</button>
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