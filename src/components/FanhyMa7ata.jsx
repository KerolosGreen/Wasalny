import React , { useState } from 'react';
import ReactDOM from 'react-dom';



function FanhyMa7ata(){

    const [ma7atetak,setma7atetak]=useState("");



    function ma7atety(event){
        setma7atetak(event.target.value);

    }

     function ShowUnderDeveloping(){
        document.getElementById("UnderDevelopingClass").style.display='block';
    }



    return(
    <>

<label>انت في محطة ايه؟</label>
        <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={ma7atety} onClick={ShowUnderDeveloping}>
            <option defaultValue value="1">حلوان</option>
            <option value="2">التاني</option>
            <option value="3">التالت</option>
            <option value="4">الرابع</option>
        </select>
        

        {ma7atetak}

    

    </>
    )
}
export default FanhyMa7ata
