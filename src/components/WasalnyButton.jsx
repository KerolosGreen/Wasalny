import React from 'react';
import ReactDOM from 'react-dom';

function WasalnyButton(props){



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


     const ThirdLVLstations=[
        "",
        "عدلي منصور",
        "الهايكستب",
        "عمر بن الخطاب",
        "قباء",
        "هشام بركات",
        "النزهة",
        "نادي الشمس",
        "ألف مسكن",
        "ميدان هيليوبليس",
        "هارون",
        "الأهرام",
        "كلية البنات",
        "الاستاد",
        "ارض المعارض",
        "العباسية",
        "عبده باشا",
        "الجيش",
        "باب الشعرية",
        "العتبة",
        "جمال عبد الناصر",
        "ماسبيرو",
        "الزمالك",
        "الكيت كات",
"السودان",
"امبابه",
"البوهي",
"القومية",
"الطريق الدائري",
    ];

    
    function HowToGo(CurrentLVL,CurrentStation,DestLVL,DestStation){
window.alert('بيتم تحديث المحطات دلوقت ، فبنعتذر عن اي خطأ ممكن يحصل او معلومات غير صحيحة حتي نهاية التحديث')        
        // window.alert("The Website Is Still Under Developing , Once It Is Ready , This Message Won't Appear To You , So The Appearing Data Is Not 100% Right.");


        if(CurrentLVL==DestLVL && DestLVL==1 ){
            if(CurrentStation>DestStation){
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[parseInt(DestStation)]); 
                props.setStationscount(CurrentStation-DestStation);
            }
            else{
                props.sethowtogo(" اركب اتجاه المرج ← انزل محطة " +firstLVLstations[parseInt(DestStation)]);
                props.setStationscount(DestStation-CurrentStation);
            }
        }

        if(CurrentLVL==DestLVL && DestLVL==2 ){
            if(CurrentStation>DestStation){
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                props.setStationscount(CurrentStation-DestStation);
            }
            else{
                props.sethowtogo(" اركب اتجاه شبرا الخيمه ← انزل محطة " +SecondLVLstations[parseInt(DestStation)]);
                props.setStationscount(DestStation-CurrentStation);
            }
        }

        if(CurrentLVL==1 && DestLVL==2){
            if(CurrentStation>19){
                if(DestStation>10){
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمه ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([CurrentStation-19])+parseInt([DestStation-10]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([CurrentStation-19])+parseInt([10-DestStation]));
                    
                }
            }
            else{
                if(DestStation>10){
                props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([19-CurrentStation])+parseInt([DestStation-10]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([19-CurrentStation])+parseInt([10-DestStation]));
                }
            }
        }

        if(CurrentLVL==2 && DestLVL==1){
            if(CurrentStation>10){
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([CurrentStation-10])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([CurrentStation-10])+parseInt([19-DestStation]));
                }
            }
            else{
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([10-CurrentStation])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([10-CurrentStation])+parseInt([19-DestStation]));
                }
            }
        }

        if(CurrentLVL==1 && DestLVL==3){
            if(CurrentStation>20){
                if(DestStation>20){
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([CurrentStation-20])+parseInt([DestStation-20]));
            }
                else{
                    props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه ا اتجاه عدلي منصور← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([CurrentStation-20])+parseInt([20-DestStation]));
                }
            }
            else{
                if(DestStation>20){
                props.sethowtogo("  اركب اتجاه المرج ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([20-CurrentStation])+parseInt([DestStation-20]));
                }
                else{
                    props.sethowtogo("  اركب اتجاه المرج ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([20-CurrentStation])+parseInt([20-DestStation]));
                }
            }
        }
        if(CurrentLVL==2 && DestLVL==3){
            if(CurrentStation>12){
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([CurrentStation-12])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([CurrentStation-12])+parseInt([19-DestStation]));
                }
            }
            else{
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([12-CurrentStation])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([12-CurrentStation])+parseInt([19-DestStation]));
                }
            }
        }

        if(CurrentLVL==3 && DestLVL==2){
            if(CurrentStation>19){
                if(DestStation>12){
                props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([CurrentStation-19])+parseInt([DestStation-12]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([CurrentStation-19])+parseInt([12-DestStation]));
                }
            }
            else{
                if(DestStation>12){
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([19-CurrentStation])+parseInt([DestStation-12]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([19-CurrentStation])+parseInt([12-DestStation]));
                }
            }
        }

        if(CurrentLVL==3 && DestLVL==1){
            if(CurrentStation>20){
                if(DestStation>20){
                props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([CurrentStation-20])+parseInt([DestStation-20]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([CurrentStation-20])+parseInt([20-DestStation]));
                }
            }
            else{
                if(DestStation>20){
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                props.setStationscount(parseInt([20-CurrentStation])+parseInt([DestStation-20]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);
                    props.setStationscount(parseInt([20-CurrentStation])+parseInt([20-DestStation]));
                }
            }
        }

        if(CurrentLVL==DestLVL && DestLVL==3 ){
            if(DestStation<CurrentStation){
                props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                props.setStationscount(CurrentStation-DestStation);
            }
            else{
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[parseInt(DestStation)]);
                props.setStationscount(DestStation-CurrentStation);
            }
        }





        
    if(CurrentLVL==DestLVL && CurrentStation==DestStation){
    props.sethowtogo(" ما انت كده في المحطة يسطا , ركز بالله عليك ");
                    
        }


    }


    return(
    <>
    <button type='submit' className='btn btn-primary rounded shadow-sm' onClick={() => { HowToGo((props.currentstation).charAt(0),(props.currentstation).charAt(1)+(props.currentstation).charAt(2),(props.destination).charAt(0),(props.destination).charAt(1)+(props.destination).charAt(2)) }}>وصلني</button>
    {/*{props.currentlvl+" "+props.currentstation+" "+props.destinationlevel+" "+props.destination} */}
    {/* <h4>{(props.currentstation).charAt(0)}</h4>
    <h4>{(props.currentstation).charAt(1)+(props.currentstation).charAt(2)}</h4>
    <h4>{(props.destination).charAt(0)}</h4>
    <h4>{(props.destination).charAt(1)+(props.destination).charAt(2)}</h4> */}
    {/* {(props.currentlvl).charAt(0)+" "+(props.currentstation).charAt(1)+(props.currentstation).charAt(2)+" "+(props.destination).charAt(0)+" "+(props.destination).charAt(1)+(props.destination).charAt(2)} */}


    </>
    )
}
export default WasalnyButton;
