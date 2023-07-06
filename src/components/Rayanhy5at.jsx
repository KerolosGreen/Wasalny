import React from 'react';
import ReactDOM from 'react-dom';

function Rayanhy5at({setdestinationlevel}){
    function ShowUnderDeveloping(){
        // document.getElementById("UnderDevelopingClass").style.display='block';
    }
    function onChangelvl(event){
        setdestinationlevel(event.target.value);
    }
    
    return(
    <>
    <label>رايح محطة في الخط الكام؟</label>
        <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onChangelvl}>
            <option defaultValue value="1">الاول</option>
            <option value="2">التاني</option>
        </select>

    </>
    )
}
export default Rayanhy5at