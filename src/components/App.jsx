import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import Footer from './Footer';
import AppBody from './AppBody';
import UnderDeveloping from './UnderDeveloping';



function App(){
    function undermaintain(flag){
        if(flag) return(<UnderDeveloping/>)
    }
    return(
        <>
        {undermaintain(false)}
        <NavBar/>
        <AppBody/>
{/*         <Footer/> */}
       </>
    )
}
export default App
