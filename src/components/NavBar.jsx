import React from 'react';
import ReactDOM from 'react-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand bg-body-tertiary rounded m-2 p-2" id='NavBarId'>
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="#">Wasalny</a>
          <div className="dark-button">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </div>
        </div>
      </nav>
    )
}
export default NavBar