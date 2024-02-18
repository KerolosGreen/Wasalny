import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Stations from './Stations';

function AppBottom(props){
        //Notify The User With The Details In Notifications Bar
    function addtonotifications(){
        if(props.howtogonow){
            Notification.requestPermission()
        .then(
            (permission)=>{
                if(permission=='granted'){
                    new Notification(props.howtogonow)
                }
            }
        )
        }  
    }
    return(
            <>
            <div className='AppBottomClass'>
            {props.Stationscount?<p class="bg-dark rounded px-3 text-light p-2" id='resultid'>عدد المحطات : {props.Stationscount}
                , متوسط وقت الوصول من {parseInt(props.Stationscount)*3} ل {parseInt(props.Stationscount)*5} دقايق</p>:null}
            <p class="bg-dark rounded px-3 text-light p-2" id='resultid'>{props.howtogonow}</p>
                {props.howtogonow?addtonotifications():null}
            </div>
            </>
    )
}
export default AppBottom
