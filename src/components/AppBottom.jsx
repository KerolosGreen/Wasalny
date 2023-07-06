import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Stations from './Stations';

function AppBottom(props){
    const [name,setname] =useState("");
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
        const [FullDescription , setFullDescription] = useState("");

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
    function onChangeName(event){
        setname(event.target.value);
    }
    return(
            <>
            {/* <input type='text' onChange={onChangeName}/> */}
            <div className='AppBottomClass'>
                {/* <p>{firstLVLstations[name]}</p> */}
                    <p class="bg-dark rounded-pill px-3 text-light p-2" id='resultid'>
                    {props.howtogonow}
                    </p>
                
                
                                        

            </div>
            </>
    )
}
export default AppBottom
