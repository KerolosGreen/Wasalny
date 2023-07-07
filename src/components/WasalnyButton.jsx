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


    
    function HowToGo(CurrentLVL,CurrentStation,DestLVL,DestStation){
        

        

        // if(CurrentLVL==DestLVL && DestLVL==1 ){
        //     if(CurrentStation>DestStation){
        //         props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                
        //     }
        //     else{
        //         props.sethowtogo(" اركب اتجاه المرج ← انزل محطة " +firstLVLstations[DestStation]);
                
        //     }
        // }

        // if(CurrentLVL==DestLVL && DestLVL==2 ){
        //     if(CurrentStation>DestStation){
        //         props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                
        //     }
        //     else{
        //         props.sethowtogo(" اركب اتجاه شبرا الخيمه ← انزل محطة " +SecondLVLstations[DestStation]);
                
        //     }
        // }

        // if(CurrentLVL==1 && DestLVL==2){
        //     if(CurrentStation>19){
        //         if(DestStation>10)
        //         props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمه ← انزل محطة "+SecondLVLstations[DestStation]);
                    
        //         else{
        //             props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                
        //         }
        //     }
        //     else{
        //         if(DestStation>10)
        //         props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[DestStation]);
                   
        //         else{
        //             props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                   
        //         }
        //     }
        // }

        // if(CurrentLVL==2 && DestLVL==1){
        //     if(CurrentStation>10){
        //         if(DestStation>19)
        //         props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                    
        //         else{
        //             props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                
        //         }
        //     }
        //     else{
        //         if(DestStation>19)
        //         props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                    
        //         else{
        //             props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                    
        //         }
        //     }
        // }




        // if(CurrentLVL==1 && DestLVL==3){
        //     if(CurrentStation>19){
        //         if(DestStation>19)
        //         props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة رمسيس و حول للخط التاني ← اركب اتجاه المنيب و انزل العتبة ← حول للخط التالت و اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة رمسيس و حول للخط التاني ← اركب اتجاه المنيب و انزل العتبة ← حول للخط التالت و اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
        //         }
        //     }
        //     else{
        //         if(DestStation>19)
        //         props.sethowtogo("  اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة العتبة ← حول للخط التالت و اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo("  اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة العتبة ← حول للخط التالت و اركب اتجاه عدلي منصور ← انزل محطة " +ThirdLVLstations[DestStation]);
        //         }
        //     }
        // }
        // if(CurrentLVL==2 && DestLVL==3){
        //     if(CurrentStation>12){
        //         if(DestStation>19)
        //         props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
        //         }
        //     }
        //     else{
        //         if(DestStation>19)
        //         props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
        //         }
        //     }
        // }

        // if(CurrentLVL==3 && DestLVL==2){
        //     if(CurrentStation>19){
        //         if(DestStation>12)
        //         props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
        //         }
        //     }
        //     else{
        //         if(DestStation>12)
        //         props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
        //         }
        //     }
        // }

        // if(CurrentLVL==3 && DestLVL==1){
        //     if(CurrentStation>19){
        //         if(DestStation>19)
        //         props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب و انزل محطة السادات ← حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب و انزل محطة السادات ← حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
        //         }
        //     }
        //     else{
        //         if(DestStation>19)
        //         props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب و انزل محطة السادات ← حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
        //         else{
        //             props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب و انزل محطة السادات ← حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
        //         }
        //     }
        // }

        // if(CurrentLVL==DestLVL && DestLVL==3 ){
        //     if(CurrentStation>DestStation){
        //         props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
        //     }
        //     else{
        //         props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
        //     }
        // }
window.alert("The Website Is Still Under Developing , Once It Is Ready , This Message Won't Appear To You , So The Appearing Data Is Not 100% Right.");


        if(CurrentLVL==DestLVL && DestLVL==1 ){
            if(CurrentStation>DestStation){
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[parseInt(DestStation)]);            }
            else{
                props.sethowtogo(" اركب اتجاه المرج ← انزل محطة " +firstLVLstations[parseInt(DestStation)]);
            }
        }

        if(CurrentLVL==DestLVL && DestLVL==2 ){
            if(CurrentStation>DestStation){
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
            }
            else{
                props.sethowtogo(" اركب اتجاه شبرا الخيمه ← انزل محطة " +SecondLVLstations[DestStation]);
            }
        }

        if(CurrentLVL==1 && DestLVL==2){
            if(CurrentStation>19){
                if(DestStation>10)
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمه ← انزل محطة "+SecondLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>10)
                props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                }
            }
        }

        if(CurrentLVL==2 && DestLVL==1){
            if(CurrentStation>10){
                if(DestStation>19)
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>19)
                props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                }
            }
        }

        if(CurrentLVL==1 && DestLVL==3){
            if(CurrentStation>20){
                if(DestStation>20)
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه ا اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه ا اتجاه عدلي منصور← انزل محطة "+ThirdLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>20)
                props.sethowtogo("  اركب اتجاه المرج ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
                else{
                    props.sethowtogo("  اركب اتجاه المرج ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
                }
            }
        }
        if(CurrentLVL==2 && DestLVL==3){
            if(CurrentStation>12){
                if(DestStation>19)
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>19)
                props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
                }
            }
        }

        if(CurrentLVL==3 && DestLVL==2){
            if(CurrentStation>19){
                if(DestStation>12)
                props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>12)
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+SecondLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+SecondLVLstations[DestStation]);
                }
            }
        }

        if(CurrentLVL==3 && DestLVL==1){
            if(CurrentStation>20){
                if(DestStation>20)
                props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه هدلي منصور ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                }
            }
            else{
                if(DestStation>20)
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+firstLVLstations[DestStation]);
                else{
                    props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+firstLVLstations[DestStation]);
                }
            }
        }

        if(CurrentLVL==DestLVL && DestLVL==3 ){
            if(DestStation<CurrentStation){
                props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة "+ThirdLVLstations[DestStation]);
            }
            else{
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة "+ThirdLVLstations[DestStation]);
            }
        }





        
    if(CurrentLVL==DestLVL && CurrentStation==DestStation){
    props.sethowtogo(" ما انت كده في المحطة يسطا , ركز بالله عليك ");
                    
        }


    }

    // function printhi(){
    //     props.sethowtogo(now);
    //     // HowToGo(props.currentlvl,props.currentstation,props.destinationlevel,props.destination)
    // }
    
    return(
    <>
    <button type='submit' className='btn btn-primary rounded shadow-sm' onClick={() => { HowToGo(props.currentlvl,props.currentstation,props.destinationlevel,props.destination) }}>وصلني</button>
    {/*{props.currentlvl+" "+props.currentstation+" "+props.destinationlevel+" "+props.destination} */}


    </>
    )
}
export default WasalnyButton;
