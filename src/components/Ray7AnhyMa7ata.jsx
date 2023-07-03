import React from 'react';
import ReactDOM from 'react-dom';






function Ray7AnhyMa7ata(){
     function ShowUnderDeveloping(){
        document.getElementById("UnderDevelopingClass").style.display='block';
    }
    return(
    <>
    <label>عايز تروح محطة ايه؟</label>
            <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onClick={ShowUnderDeveloping}>
                <option defaultValue value="1">عين شمس</option>
                <option value="2">التاني</option>
                <option value="3">التالت</option>
                <option value="4">الرابع</option>
            </select>
    </>
    )
}
export default Ray7AnhyMa7ata
