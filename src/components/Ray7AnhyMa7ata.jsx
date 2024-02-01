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


    
        return(
            <>
                <label>عايز تروح محطة ايه؟</label>
                <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangedestinationstation}>
                <option disabled className='OptionTitle'>محطات الخط الاول</option>
                <option value="101">حلوان</option>
                <option value="102">عين حلوان</option>
                <option value="103">جامعة حلوان</option>
                <option value="104">وادي حوف</option>
                <option value="105">حدائق حلوان</option>
                <option value="106">المعصرة</option>
                <option value="107">طرة الأسمنت</option>
                <option value="108">كوتسيكا</option>
                <option value="109">طرة البلد</option>
                <option value="110">ثكنات المعادي</option>
                <option value="111">المعادي</option>
                <option value="112">حدائق المعادي</option>
                <option value="113">دار السلام</option>
                <option value="114">الزهراء</option>
                <option value="115">مارجرجس</option>
                <option value="116">الملك الصالح</option>
                <option value="117">السيدة زينب</option>
                <option value="118">سعد زغلول</option>
                <option value="119">السادات</option>
                <option value="120">جمال عبد الناصر</option>
                <option value="121">أحمد عرابي</option>
                <option value="122">الشهداء</option>
                <option value="123">غمرة</option>
                <option value="124">الدمرداش</option>
                <option value="125">منشية الصدر</option>
                <option value="126">كوبري القبة</option>
                <option value="127">حمامات القبة</option>
                <option value="128">سراي القبة</option>
                <option value="129">حدائق الزيتون</option>
                <option value="130">حلمية الزيتون</option>
                <option value="131">المطرية</option>
                <option value="132">عين شمس</option>
                <option value="133">عزبة النخل</option>
                <option value="134">المرج</option>
                <option value="135">المرج الجديدة</option>
                    <option disabled className='OptionTitle'>محطات الخط التاني</option>
                    <option value="201">المنيب</option>
                    <option value="202">ساقية مكى</option>
                    <option value="203">أم المصريين</option>
                    <option value="204">محطة الجيزة</option>
                    <option value="205">فيصل</option>
                    <option value="206">جامعة القاهرة</option>
                    <option value="207">البحوث</option>
                    <option value="208">الدقي</option>
                    <option value="209">الأوبرا</option>
                    <option value="210">السادات</option>
                    <option value="211">محمد نجيب</option>
                    <option value="212">العتبة</option>
                    <option value="213">الشهداء</option>
                    <option value="214">مسرة</option>
                    <option value="215">روض الفرج</option>
                    <option value="216">سانت تريزا</option>
                    <option value="217">الخلفاوى</option>
                    <option value="218">المظلات</option>
                    <option value="219">كلية الزراعة</option>
                    <option value="220">شبرا الخيمة</option>
                                 <option disabled className='OptionTitle'>محطات الخط التالت</option>
                                 <option value="301">عدلي منصور</option>
                                 <option value="302">الهايكستب</option>
                                 <option value="303">عمر بن الخطاب</option>
                                 <option value="304">قباء</option>
                                 <option value="305">هشام بركات</option>
                                 <option value="306">النزهة</option>
                                 <option value="307">نادي الشمس</option>
                                 <option value="308">ألف مسكن</option>
                                 <option value="309">ميدان هيليوبليس</option>
                                 <option value="310">هارون</option>
                                 <option value="311">الأهرام</option>
                                 <option value="312">كلية البنات</option>
                                 <option value="313">الاستاد</option>
                                 <option value="314">ارض المعارض</option>
                                 <option value="315">العباسية</option>
                                 <option value="316">عبده باشا</option>
                                 <option value="317">الجيش</option>
                                 <option value="318">باب الشعرية</option>
                                 <option value="319">العتبة</option>
                                 <option value="320">جمال عبد الناصر</option>
                                 <option value="321">ماسبيرو</option>
                                 <option value="322">صفاء حجازي  (الزمالك)</option>
                                 <option value="323">الكيت كات</option>


<option value="324">السودان</option>
<option value="325">امبابه</option>
<option value="326">البوهي</option>
<option value="327">القومية</option>
<option value="328">الطريق الدائري</option>


                                </select>
                                 </>
    
                )
}
export default Ray7AnhyMa7ata
