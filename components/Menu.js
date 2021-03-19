


import React, {useContext,useState} from 'react';




const App = () => {
  const userContext = useContext(UserContext);
  return (
    <>
      
  

    
      <div className="cont">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img className="app-logo" src={logo} width="60" height="60" alt="ReactJS" />
          <div className="collpase nav-collapse">
         
            <ul className="navbar-nav mr-auto">
           
              <li className="navbar-item">
                <Link to="/dashboard" className="nav-link"><FontAwesomeIcon icon='tachometer-alt' /> Dashboard</Link>
              </li>
              <li className="navbar-item">
                <Link to="/books" className="nav-link"><FontAwesomeIcon icon='book' /> Books</Link>
              </li>
              <li className="navbar-item">
                <Link to="/book" className="nav-link"><FontAwesomeIcon icon='plus' /> New Book</Link>
              </li>
            </ul>
            
            
          
            {<ul className="navbar-nav mr-auto pull-right">
              <li className="navbar-item">
                <Link to="/about" className="nav-link"><FontAwesomeIcon icon='user' /> Profile</Link>
              </li>
              <li className="navbar-item">
                <a href="" className="nav-link">
                <Link  className="nav-link" to="/" >
                  <FontAwesomeIcon icon='sign-out-alt' />
                  Logout</Link>

                  
             
                  </a>
              </li>
            </ul>}
         
          </div>
        </nav>
       
       
       
       
      </div>
    </>
  );
}

export default App;
