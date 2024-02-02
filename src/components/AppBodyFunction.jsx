import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FanhyMa7ata from './FanhyMa7ata';
import Ray7AnhyMa7ata from './Ray7AnhyMa7ata';
import UnderDeveloping from './UnderDeveloping';
import WasalnyButton from './WasalnyButton';


function AppBodyFunction(props){
    const [currentlvl , setcurrentlvl]=useState("");
    const [currentstation,setcurrentstation]=useState("101");
    const [destinationlevel, setdestinationlevel]=useState("");
    const [destination,setdestination]=useState("101");
    
    return(
    <>
    <div className="AppBodyFunctionClass">
        <FanhyMa7ata namecurrentlevel={currentlvl} setcurrentstation={setcurrentstation}/>
        <Ray7AnhyMa7ata currentmetrolevel={currentlvl} currentmetrostation={currentstation} destinationlevel={destinationlevel} setdestination={setdestination}/>
        <WasalnyButton currentlvl={currentlvl} currentstation={currentstation} destinationlevel={destinationlevel} destination={destination} sethowtogo={props.sethowtogonow} setStationscount={props.setStationscount}/>
    </div>
    </>
    )
}
export default AppBodyFunction
