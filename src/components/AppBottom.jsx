import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Stations from './Stations';

function AppBottom(props){
    return(
            <>
            <div className='AppBottomClass'>
                {// The Result Description}
            {props.Stationscount?<p class="bg-dark rounded px-3 text-light p-2" id='resultid'>عدد المحطات : {props.Stationscount} , متوسط وقت الوصول من {parseInt(props.Stationscount)*3} ل {parseInt(props.Stationscount)*5} دقايق</p>:null}
            <p class="bg-dark rounded px-3 text-light p-2" id='resultid'>{props.howtogonow}</p>
            </div>
            </>
    )
}
export default AppBottom
