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

    // function HowToGOTwo(currentlevel,currentstation,destinationlevel,destinationstation){
    //     if(currentlevel===destinationlevel && currentstation===destinationstation){
    //         if(currentstation>destinationstation){
    //             setFullDescription(" ما انت كده في المحطة يسطا , ركز بالله عليك ");
    //         }
    //     }

    //     if(currentlevel===destinationlevel && currentlevel===1){
    //         if(currentstation>destinationstation){
    //             setFullDescription(" اركب اتجاه حلوان و انزل محطة "+firstLVLstations[destinationstation]);
    //         }
    //     }

    // }


    // function EzayAro7(LVL,Station,DLVL,Dstation){
    //     // props.sethowtogo(LVL+" "+Station+" "+DLVL+" "+Dstation);
    //     if(LVL==DLVL&&LVL==1){
    //         props.sethowtogo("Level One");

    //     }
    //     if(LVL==DLVL&&LVL==2){
    //         props.sethowtogo("Level Two");

    //     }
    // }
    function HowToGo(CurrentLVL,CurrentStation,DestLVL,DestStation){
        

        

        if(CurrentLVL==DestLVL && DestLVL==1 ){
            if(CurrentStation>DestStation){
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                document.getElementById("UnderDevelopingClass").style.display='block';
            }
            else{
                props.sethowtogo(" اركب اتجاه المرج ← انزل محطة " +firstLVLstations[DestStation]);
                document.getElementById("UnderDevelopingClass").style.display='block';
            }
        }

        if(CurrentLVL==DestLVL && DestLVL==2 ){
            if(CurrentStation>DestStation){
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                document.getElementById("UnderDevelopingClass").style.display='block';
            }
            else{
                props.sethowtogo(" اركب اتجاه شبرا الخيمه ← انزل محطة " +SecondLVLstations[DestStation]);
                document.getElementById("UnderDevelopingClass").style.display='block';
            }
        }

        if(CurrentLVL==1 && DestLVL==2){
            if(CurrentStation>19){
                if(DestStation>10)
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمه ← انزل محطة "+SecondLVLstations[DestStation]);
                    document.getElementById("UnderDevelopingClass").style.display='block';
                else{
                    props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                document.getElementById("UnderDevelopingClass").style.display='block';
                }
            }
            else{
                if(DestStation>10)
                props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[DestStation]);
                    document.getElementById("UnderDevelopingClass").style.display='block';
                else{
                    props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                    document.getElementById("UnderDevelopingClass").style.display='block';
                }
            }
        }

        if(CurrentLVL==2 && DestLVL==1){
            if(CurrentStation>10){
                if(DestStation>19)
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                    document.getElementById("UnderDevelopingClass").style.display='block';
                else{
                    props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                document.getElementById("UnderDevelopingClass").style.display='block';
                }
            }
            else{
                if(DestStation>19)
                props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                    document.getElementById("UnderDevelopingClass").style.display='block';
                else{
                    props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                    document.getElementById("UnderDevelopingClass").style.display='block';
                }
            }
        }
                if(CurrentLVL==DestLVL && CurrentStation==DestStation){
                props.sethowtogo(" ما انت كده في المحطة يسطا , ركز بالله عليك ");
                    document.getElementById("UnderDevelopingClass").style.display='block';
        }
document.getElementById("UnderDevelopingClass").style.display='block';

    }

    // function printhi(){
    //     props.sethowtogo(now);
    //     // HowToGo(props.currentlvl,props.currentstation,props.destinationlevel,props.destination)
    // }
    
    return(
    <>
    <button type='submit' className='btn btn-primary rounded shadow-sm' onClick={() => { HowToGo(props.currentlvl,props.currentstation,props.destinationlevel,props.destination) }}>وصلني</button>
    {/* {props.currentlvl+" "+props.currentstation+" "+props.destinationlevel+" "+props.destination} */}


    </>
    )
}
export default WasalnyButton;
