const NavBar = () => {
    return (
        <nav className="navbar navbar-default" style={{backgroundColor: "white", width: "100%", border: "1px solid grey"}}>
            <div className="container-fluid">
                <div className="navbar-header" style={{margin: "auto"}}>
                    <a className="navbar-brand" href="/" style={{fontSize: "30px", fontWeight: "bold"}}>WeVote</a>
                </div>
            </div>
        </nav>
    );
}
  
export default NavBar;