import React,{useState} from 'react';
import ReactDOM from 'react-dom';




function Ray7AnhyMa7ata(props){
    const [howtogodesc ,sethowtogodesc]=useState("");
    const [destlvl , setdestlvl]=useState(0);
    const [deststation , setdestination]=useState(0);
    const [fulldestinfo , setfulldestinfo]=useState(0);
    const [FullDescription , setFullDescription] = useState("");


/***********************************/

    






    

const firstLVLstations=[
    "",
    "حلوان",
    "عين حلوان",
    "جامعة حلوان",
    "وادي حوف",
    "حدائق حلوان",
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
    "المرج الجديدة",
]

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
    
]






function HowToGo(CurrentLVL,CurrentStation,DestLVL,DestStation){
    if(CurrentStation===DestStation){
        return (" ما انت كده فنفس المحطة يسطا , بالله عليك ركز ")
    }
    

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





    //  return (FullDescription)
}






    /**************************/
    function ShowUnderDeveloping(){
        // document.getElementById("UnderDevelopingClass").style.display='block';
    }
    function result(event){
        // const [fulldestinfo , setfulldestinfo]=useState("");
        const p = document.getElementById('resultid');
        if(event.target.value-100<100){
            if(event.target.value<20){
                setdestlvl(1);
                setfulldestinfo(event.target.value-10);
                p.innerText=((HowToGo(props.currentmetrolevel,props.currentmetrostation,1,event.target.value-10)));
                }
                else{
                    if(event.target.value>20 && event.target.value<30){
                        setdestlvl(2);
                        setfulldestinfo(event.target.value-20);
                        p.innerText=((HowToGo(props.currentmetrolevel,props.currentmetrostation,2,event.target.value-20)));
                    }
                    else{
                         setdestlvl(1);
            setfulldestinfo(event.target.value-100);
            p.innerText=((HowToGo(props.currentmetrolevel,props.currentmetrostation,1,event.target.value-100)));
            
                    }

                }
           
        }
        
        if(event.target.value-100>100){
            setdestlvl(2);
            setfulldestinfo(event.target.value-200);
            p.innerText=((HowToGo(props.currentmetrolevel,(props.currentmetrostation),2,(event.target.value-200))));
        }
        // setfulldestinfo(Math.trunc(event.target.value / 100));
            // setdestlvl(Math.trunc(fulldestinfo / 10));
        //  HowToGo();
        // setdestlvl(fulldestinfo.charAt(0));
        // setdestination(fulldestinfo.charAt(1)+fulldestinfo.charAt(2));

        // sethowtogodesc(HowToGo(props.currentmetrolevel,props.currentmetrostation,1,5));
        
        // p.innerText=(howtogodesc);
        //document.getElementById('resultid').appendChild(p);
        //    sethowtogodesc(HowToGo(props.currentmetrolevel,1,destlvl,fulldestinfo));
    }

    function onchangedestinationstation(event){
        props.setdestination(event.target.value);
    }


    if(props.destinationlevel==1){
        return(
            <>
             <label>عايز تروح محطة ايه؟</label>
             <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangedestinationstation}>
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
        )}

        if(props.destinationlevel==2){
            return(
                             <>
                             <label>عايز تروح محطة ايه؟</label>
                             <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangedestinationstation}>
                             
                             <option defaultValue value="1">المنيب</option>
                             <option value="2">ساقية مكى</option>
                             <option value="3">أم المصريين</option>
                             <option value="4">محطة الجيزة</option>
                             <option value="5">فيصل</option>
                             <option value="6">جامعة القاهرة</option>
                             <option value="7">البحوث</option>
                             <option value="8">الدقي</option>
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

            )}


     if(props.destinationlevel==3){
                return(
                                 <>
                                 <label>عايز تروح محطة ايه؟</label>
                                 <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangedestinationstation}>
                                 <option defaultValue value="1">عدلي منصور</option>
                                 <option value="2">الهايكستب</option>
                                 <option value="3">عمر بن الخطاب</option>
                                 <option value="4">قباء</option>
                                 <option value="5">هشام بركات</option>
                                 <option value="6">النزهة</option>
                                 <option value="7">نادي الشمس</option>
                                 <option value="8">ألف مسكن</option>
                                 <option value="9">ميدان هيليوبليس</option>
                                 <option value="10">هارون</option>
                                 <option value="11">الأهرام</option>
                                 <option value="12">كلية البنات</option>
                                 <option value="13">الاستاد</option>
                                 <option value="14">ارض المعارض</option>
                                 <option value="15">العباسية</option>
                                 <option value="16">عبده باشا</option>
                                 <option value="17">الجيش</option>
                                 <option value="18">باب الشعرية</option>
                                 <option value="19">العتبة</option>
                                 <option value="20">جمال عبد الناصر</option>
                                 <option value="21">ماسبيرو</option>
                                 <option value="22">الزمالك</option>
                                 <option value="23">الكيت كات</option>
                                </select>
                                 </>
    
                )}

}
export default Ray7AnhyMa7ata
