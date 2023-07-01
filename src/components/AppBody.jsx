import React from 'react';
import ReactDOM from 'react-dom';
import AppBodyFunction from './AppBodyFunction';
import AppHeader from './AppHeader';
import AppBottom from './AppBottom';

const ThisYear = new Date();
function AppBody(){
    return(
        <div className='AppBodyClass'>
            <AppHeader/>
            <AppBodyFunction/>
            <AppBottom/>
        </div>
    )
}
export default AppBody