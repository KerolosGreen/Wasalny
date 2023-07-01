import React from 'react';
import ReactDOM from 'react-dom';

const ThisYear = new Date();

function Footer(){
    return(
        <div className='footercont'>
        <div className="container">
        <footer className="py-0 my-3">
            <p className="text-center text-muted">Wasalny,© {ThisYear.getFullYear()} , Developed By Kerolos Safwat</p>
        </footer>
        </div>
        </div>
    )
}
export default Footer