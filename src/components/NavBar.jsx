import React from 'react';
import ReactDOM from 'react-dom';

function NavBar(){
  function DarkModeOrLightMode(){
    const BodyStyle=document.getElementById("body");
    const BodyStyleCompute=window.getComputedStyle(BodyStyle).backgroundImage;
    // console.log(BodyStyleCompute);

    if(BodyStyleCompute == 'linear-gradient(-30deg, rgb(120, 163, 235), rgb(251, 194, 235), rgb(120, 163, 235))'){
      console.log(BodyStyleCompute);
      BodyStyle.style.backgroundImage='none';
      BodyStyle.style.backgroundColor='rgb(32, 33, 33)';
      // BodyStyle.querySelector("p").style.color='white';
      // document.querySelectorAll("h1, h2, h3, h4, h5, h6 , label").style.color='white';
      // BodyStyle.querySelector("label").style.color='white';
      // document.getElementsByTagName("p").style.color='white';
      
    }
    else{
      BodyStyle.style.backgroundImage='linear-gradient(-30deg, rgb(120, 163, 235), rgb(251, 194, 235), rgb(120, 163, 235))';
      BodyStyle.style.backgroundColor='none';
      // document.querySelectorAll("h1, h2, h3, h4, h5, h6").style.color='black';

    }
  }
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
