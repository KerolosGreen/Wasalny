import React from 'react';
import ReactDOM from 'react-dom';

function L5atLkam({setcurrentlvl}){
    function ShowUnderDeveloping(){
        // document.getElementById("UnderDevelopingClass").style.display='block';
    }
    function onChangelvl(event){
        setcurrentlvl(event.target.value);
    }
    
    return(
    <>
    <label>انت في الخط الكام؟</label>
        <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onChangelvl}>
            <option defaultValue value="1">الاول</option>
            <option value="2">التاني</option>
        </select>

    </>
    )
}
export default L5atLkam