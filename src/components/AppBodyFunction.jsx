import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import L5atLkam from './L5atLkam';
import FanhyMa7ata from './FanhyMa7ata';
import Ray7AnhyMa7ata from './Ray7AnhyMa7ata';
import UnderDeveloping from './UnderDeveloping';
import HowToGo from './HowToGo';
import Rayanhy5at from './Rayanhy5at';
import WasalnyButton from './WasalnyButton';


function AppBodyFunction(props){
    const [currentlvl , setcurrentlvl]=useState("");
    const [currentstation,setcurrentstation]=useState("101");
    const [destinationlevel, setdestinationlevel]=useState("");
    const [destination,setdestination]=useState("101");
    const [howtogo , sethowtogo]=useState("");
    
    return(
    <>
    <div className="AppBodyFunctionClass">
        {/* <L5atLkam setcurrentlvl={setcurrentlvl}/> */}
        <FanhyMa7ata namecurrentlevel={currentlvl} setcurrentstation={setcurrentstation}/>
        {/* <Rayanhy5at setdestinationlevel={setdestinationlevel}/> */}
        <Ray7AnhyMa7ata currentmetrolevel={currentlvl} currentmetrostation={currentstation} destinationlevel={destinationlevel} setdestination={setdestination}/>
        <WasalnyButton currentlvl={currentlvl} currentstation={currentstation} destinationlevel={destinationlevel} destination={destination} sethowtogo={props.sethowtogonow} setStationscount={props.setStationscount}/>
        {/* <HowToGo/> */}
        <UnderDeveloping howtogonow={props.howtogonow}/>
        {/* <h4>Current Level : {currentlvl}</h4>
        <h4>Current Station :{currentstation}</h4>
        <h4>Destination Level : {destinationlevel}</h4>
        <h4>Destination Station : {destination}</h4>
        <h4>How To Section : {howtogo}</h4> */}
        {/* <h4>Current Station :{currentstation}</h4>
        <h4>Destination Station : {destination}</h4> */}
        {/* <h4>Number Of Stations : {Stationscount}</h4> */}
        
        
    </div>
    </>
    )
}
export default AppBodyFunction
