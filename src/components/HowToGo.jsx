import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import stations from './Stations';

function HowToGo(){
    const [currentlevel , setcurrentlevel]=useState(1);
    const [currentstation , setcurrentstation]=useState(1);
    const [destinationlevel , setdestinationlevel]=useState(1);
    const [destinationstation , setdestinationstation]=useState();
    const [FullDescription , setFullDescription] = useState("");



    const firstLVLstations=[
        "",
        "حلوان",
        "عين حلوان",
        "جامعة حلوان",
        "حدائق حلوان",
        "وادي حوف",
        "المعصرة",
        "طرة الأسمنت",
        "كوتسيكا",
        "طرة البلد",
        "ثكنات المعادي",
        "المعادي",
        "حدائق المعادي",
        "دار السلام",
        "الزهراء",
        "مار جرجس",
        "الملك الصالح",
        "السيدة زينب",
        "سعد زغلول",
        "السادات",
        "ناصر",
        "عرابي",
        "الشهداء",
        "غمرة",
        "الدمرداش",
        "منشية الصدر",
        "كوبري القبة",
        "حمامات القبة",
        "سراي القبة",
        "حدائق الزيتون",
        "حلمية الزيتون",
        "المطرية",
        "عين شمس",
        "عزبة النخل",
        "المرج",
        "المرج الجديدة[",
    ];
    
    
    const SecondLVLstations=[
        "",
        "المنيب",
        "ساقية مكي",
        "أم المصريين",
        "الجيزة",
        "فيصل",
        "جامعة القاهرة",
        "البحوث",
        "الدقي",
        "الأوبرا",
        "السادات",
        "محمد نجيب",
        "العتبة",
        "الشهداء",
        "مسرة",
        "روض الفرج",
        "سانتا تريزا",
        "الخلفاوي",
        "المظلات",
        "كلية الزراعة",
        "شبرا الخيمة",
    ];

    function HowToGOTwo(currentlevel,currentstation,destinationlevel,destinationstation){
        if(currentlevel===destinationlevel && currentstation===destinationstation){
            if(currentstation>destinationstation){
                setFullDescription(" ما انت كده في المحطة يسطا , ركز بالله عليك ");
            }
        }

        if(currentlevel===destinationlevel && currentlevel===1){
            if(currentstation>destinationstation){
                setFullDescription(" اركب اتجاه حلوان و انزل محطة "+firstLVLstations[destinationstation]);
            }
        }

    }



    function HowToGo(CurrentLVL,CurrentStation,DestLVL,DestStation){
        

        if(CurrentLVL===DestLVL && DestLVL===1 ){
            if(CurrentStation>DestStation){
                return(" اركب اتجاه حلوان و انزل محطة "+firstLVLstations[DestStation]);
            }
            else{
                return(" اركب اتجاه المرج و انزل محطة " +firstLVLstations[DestStation]);
            }
        }

        if(CurrentLVL===DestLVL && DestLVL===2 ){
            if(CurrentStation>DestStation){
                return(" اركب اتجاه المنيب و انزل محطة "+SecondLVLstations[DestStation]);
            }
            else{
                return(" اركب اتجاه شبرا الخيمه و انزل محطة " +SecondLVLstations[DestStation]);
            }
        }

        if(CurrentLVL===1&& DestLVL===2){
            if(CurrentStation>19){
                if(DestStation>10)
                return(" اركب اتجاه حلوان و انزل محطة السادات و حول للخط التاني و اركب اتجاه شبرا الخيمه و انزل محطة "+SecondLVLstations[DestStation]);
                else{
                    return(" اركب اتجاه حلوان و انزل محطة السادات و حول للخط التاني و اركب اتجاه المنيب و انزل محطة "+SecondLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>10)
                return(" اركب اتجاه المرج و انزل محطة السادات و حول للخط التاني و اركب اتجاه شبرا الخيمة و انزل محطة "+SecondLVLstations[DestStation]);
                else{
                    return(" اركب اتجاه المرج و انزل محطة السادات و حول للخط التاني و اركب اتجاه المنيب و انزل محطة "+SecondLVLstations[DestStation]);
                }
            }
        }

        if(CurrentLVL===2&& DestLVL===1){
            if(CurrentStation>10){
                if(DestStation>19)
                return(" اركب اتجاه المنيب و انزل محطة السادات و حول للخط الاول و اركب اتجاه المرج و انزل محطة "+firstLVLstations[DestStation]);
                else{
                    return(" اركب اتجاه المنيب و انزل محطة السادات و حول للخط الاول و اركب اتجاه حلوان و انزل محطة "+firstLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>19)
                return(" اركب اتجاه شبرا الخيمة و انزل محطة السادات و حول للخط الاول و اركب اتجاه المرج و انزل محطة "+firstLVLstations[DestStation]);
                else{
                    return(" اركب اتجاه شبرا الخيمة و انزل محطة السادات و حول للخط الاول و اركب اتجاه حلوان و انزل محطة "+firstLVLstations[DestStation]);
                }
            }
        }

    }








    function onChangeCurrentlevel(event){
        setcurrentlevel(event.target.value);
    }
    function onChangeCurrentStation(event){
        setcurrentstation(event.target.value);
    }
    function onChangedestinationtStation(event){
        setdestinationstation(event.target.value);
    }
    function onChangedestinationtlevel(event){
        setdestinationlevel(event.target.value);
        setFullDescription(HowToGo(currentlevel,currentstation,destinationlevel,destinationstation));
    }
    
    
    
    return(
    <>
    <label>انت في الخط الكام؟</label>
        <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onChangeCurrentlevel}>
            <option defaultValue value="1">الاول</option>
            <option value="2">التاني</option>
        </select>
<>
                                {currentlevel==1?
                                <>
                                <label>انت في محطة ايه؟</label>
                                <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onChangeCurrentStation}>
                                <option defaultValue value="1">حلوان</option>
                                <option value="2">عين حلوان</option>
                                <option value="3">جامعة حلوان</option>
                                <option value="4">وادي حوف</option>
                                <option value="5">حدائق حلوان</option>
                                <option value="6">المعصرة</option>
                                <option value="7">طرة الأسمنت</option>
                                <option value="8">كوتسيكا</option>
                                <option value="9">طرة البلد</option>
                                <option value="10">ثكنات المعادي</option>
                                <option value="11">المعادي</option>
                                <option value="12">حدائق المعادي</option>
                                <option value="13">دار السلام</option>
                                <option value="14">الزهراء</option>
                                <option value="15">مارجرجس</option>
                                <option value="16">الملك الصالح</option>
                                <option value="17">السيدة زينب</option>
                                <option value="18">سعد زغلول</option>
                                <option value="19">السادات</option>
                                <option value="20">جمال عبد الناصر</option>
                                <option value="21">أحمد عرابي</option>
                                <option value="22">الشهداء</option>
                                <option value="23">غمرة</option>
                                <option value="24">الدمرداش</option>
                                <option value="25">منشية الصدر</option>
                                <option value="26">كوبري القبة</option>
                                <option value="27">حمامات القبة</option>
                                <option value="28">سراي القبة</option>
                                <option value="29">حدائق الزيتون</option>
                                <option value="30">حلمية الزيتون</option>
                                <option value="31">المطرية</option>
                                <option value="32">عين شمس</option>
                                <option value="33">عزبة النخل</option>
                                <option value="34">المرج</option>
                                <option value="35">المرج الجديدة</option>
                            </select>
                            
                            </>
                                :null}

                                {currentlevel==2?
                                <>
                                <label>انت في محطة ايه؟</label>
                                <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onChangeCurrentStation}>
                                <option defaultValue value="1">المنيب</option>
                                <option value="2">ساقية مكى</option>
                                <option value="3">ضواحى الجيزة</option>
                                <option value="4">محطة الجيزة</option>
                                <option value="5">فيصل</option>
                                <option value="6">جامعة القاهرة</option>
                                <option value="7">الدقى</option>
                                <option value="8">البحوث</option>
                                <option value="9">الأوبرا</option>
                                <option value="10">السادات</option>
                                <option value="11">محمد نجيب</option>
                                <option value="12">العتبة</option>
                                <option value="13">الشهداء</option>
                                <option value="14">مسرة</option>
                                <option value="15">روض الفرج</option>
                                <option value="16">سانت تريزا</option>
                                <option value="17">الخلفاوى</option>
                                <option value="18">المظلات</option>
                                <option value="19">كلية الزراعة</option>
                                <option value="20">شبرا الخيمة</option>
                   
                            </select>
                            
                            </>
                                :null}
                                </>


                                <>
                                <label>عايز تروح محطة في الخط الكام؟</label>
                                <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onClick={onChangedestinationtlevel}>
                                <option selected value="1">الخط الاول</option>
                                <option value="2">الخط التاني</option>
                                </select>
                                </>



                                <>
            <label>عايز تروح محطة ايه؟</label>
            <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onClick={onChangedestinationtStation}>
            {destinationlevel==1?<>
             <option defaultValue value="1">حلوان</option>
             <option value="2">عين حلوان</option>
             <option value="3">جامعة حلوان</option>
             <option value="4">وادي حوف</option>
             <option value="5">حدائق حلوان</option>
             <option value="6">المعصرة</option>
             <option value="7">طرة الأسمنت</option>
             <option value="8">كوتسيكا</option>
             <option value="9">طرة البلد</option>
             <option value="10">ثكنات المعادي</option>
             <option value="11">المعادي</option>
             <option value="12">حدائق المعادي</option>
             <option value="13">دار السلام</option>
             <option value="14">الزهراء</option>
             <option value="15">مارجرجس</option>
             <option value="16">الملك الصالح</option>
             <option value="17">السيدة زينب</option>
             <option value="18">سعد زغلول</option>
             <option value="19">السادات</option>
             <option value="20">جمال عبد الناصر</option>
             <option value="21">أحمد عرابي</option>
             <option value="22">الشهداء</option>
             <option value="23">غمرة</option>
             <option value="24">الدمرداش</option>
             <option value="25">منشية الصدر</option>
             <option value="26">كوبري القبة</option>
             <option value="27">حمامات القبة</option>
             <option value="28">سراي القبة</option>
             <option value="29">حدائق الزيتون</option>
             <option value="30">حلمية الزيتون</option>
             <option value="31">المطرية</option>
             <option value="32">عين شمس</option>
             <option value="33">عزبة النخل</option>
             <option value="34">المرج</option>
             <option value="35">المرج الجديدة</option>
             </>:null}
             {destinationlevel==2?<>
             <option defaultValue value="1">المنيب</option>
                             <option value="2">ساقية مكى</option>
                             <option value="3">ضواحى الجيزة</option>
                             <option value="4">محطة الجيزة</option>
                             <option value="5">فيصل</option>
                             <option value="6">جامعة القاهرة</option>
                             <option value="7">الدقى</option>
                             <option value="8">البحوث</option>
                             <option value="9">الأوبرا</option>
                             <option value="10">السادات</option>
                             <option value="11">محمد نجيب</option>
                             <option value="12">العتبة</option>
                             <option value="13">الشهداء</option>
                             <option value="14">مسرة</option>
                             <option value="15">روض الفرج</option>
                             <option value="16">سانت تريزا</option>
                             <option value="17">الخلفاوى</option>
                             <option value="18">المظلات</option>
                             <option value="19">كلية الزراعة</option>
                             <option value="20">شبرا الخيمة</option>
                             </>:null}
            </select>
            </>



                <button className='btn btn-primary' onClick={HowToGOTwo(1,1,1,1)}>Wasalny</button>


        <h4>Current Level : {currentlevel}</h4>
        <h4>Current Station : {currentstation}</h4>
        <h4>Destination level : {destinationlevel}</h4>
        <h4>Destination Station : {destinationstation}</h4>
         <h4>{FullDescription}</h4> 
        {/* <h4>{HowToGo(currentlevel,currentstation,destinationlevel,destinationstation)}</h4> */}
        {/* <h4>{firstLVLstations[16]}</h4>  */}
    </>
    )
}
export default HowToGo