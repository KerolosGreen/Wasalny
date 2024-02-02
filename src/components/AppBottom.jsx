import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Stations from './Stations';

function AppBottom(props){
    return(
            <>
            <div className='AppBottomClass'>
            {props.Stationscount?<p class="bg-dark rounded px-3 text-light p-2" id='resultid'>عدد المحطات : {props.Stationscount}</p>:null}
            <p class="bg-dark rounded px-3 text-light p-2" id='resultid'>{props.howtogonow}</p>
            </div>
            </>
    )
}
export default AppBottom
