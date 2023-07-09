import React from 'react';
import ReactDOM from 'react-dom';

const ThisYear = new Date();

function Footer(){
    return(
        <div className='footercont'>
        <div className="container">
        <footer className="py-0 my-3">
            <p className="text-center text">Wasalny © {ThisYear.getFullYear()} , Developed By <a href="https://kerolos-pr-portfolio.vercel.app/" class="link-light"> Kerolos Safwat </a></p>
        </footer>
        </div>
        </div>
    )
}
export default Footer
