import React from 'react';
import ReactDOM from 'react-dom';

function NavBar(){
 
    return(
        <nav className="navbar navbar-expand bg-body-tertiary rounded m-2 p-2" id='NavBarId'>
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="#">Wasalny</a>
          <div className="dark-button" onClick={DarkModeOrLightMode}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </div>
        </div>
      </nav>
    )
}
export default NavBar


// function colormode(){
//   const topcontainer=document.getElementById("top-cont");
//   const topcontbackground=window.getComputedStyle(topcontainer).backgroundImage;
  
//   console.log(window.getComputedStyle(topcontainer).backgroundImage);

//   //  console.log(bodyy);
//     if(topcontbackground=='none'){
//       topcontainer.style.backgroundImage = "linear-gradient(-30deg ,#78A3eb,#FBC2EB ,#78A3eb)";
//    }
//    else{
//       topcontainer.style.backgroundImage = "none";
//    }
//   // document.getElementById("body").style.background='black';
// }
