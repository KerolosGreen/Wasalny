import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppBodyFunction from './AppBodyFunction';
import AppHeader from './AppHeader';
import AppBottom from './AppBottom';
import Footer from './Footer';

const ThisYear = new Date();
function AppBody(){
    const[howtogonow,sethowtogonow]=useState("");
    const [Stationscount , setStationscount]=useState("");
    return(
        <div className='AppBodyClass'>
            <AppHeader/>
            <AppBodyFunction sethowtogonow={sethowtogonow} setStationscount={setStationscount}/>
            <AppBottom howtogonow={howtogonow}  Stationscount={Stationscount} />
            <Footer/>
        </div>
    )
}
export default AppBody
