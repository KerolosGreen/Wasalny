import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppBodyFunction from './AppBodyFunction';
import AppHeader from './AppHeader';
import AppBottom from './AppBottom';
import Footer from './Footer';

const ThisYear = new Date();
function AppBody(){
    const[howtogonow,sethowtogonow]=useState("");
    return(
        <div className='AppBodyClass'>
            <AppHeader/>
            <AppBodyFunction sethowtogonow={sethowtogonow}/>
            <AppBottom howtogonow={howtogonow} />
            <Footer/>
        </div>
    )
}
export default AppBody
