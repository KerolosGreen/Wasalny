import React from 'react';
import ReactDOM from 'react-dom';


function L5atLkam(){
    function ShowUnderDeveloping(){
        document.getElementById("UnderDevelopingClass").style.display='block';
    }
    return(
    <>
    <label>انت في الخط الكام؟</label>
        <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onClick={ShowUnderDeveloping}>
            <option defaultValue value="1">الاول</option>
            <option value="2">التاني</option>
            <option value="3">التالت</option>
            <option value="4">الرابع</option>
        </select>

    </>
    )
}
export default L5atLkam
