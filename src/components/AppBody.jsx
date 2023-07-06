import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppBodyFunction from './AppBodyFunction';
import AppHeader from './AppHeader';
import AppBottom from './AppBottom';

const ThisYear = new Date();
function AppBody(){
    const[howtogonow,sethowtogonow]=useState("");
    return(
        <div className='AppBodyClass'>
            <AppHeader/>
            <AppBodyFunction sethowtogonow={sethowtogonow}/>
            <AppBottom howtogonow={howtogonow} />
        </div>
    )
}
export default AppBody