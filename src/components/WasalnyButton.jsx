import React from 'react';
import ReactDOM from 'react-dom';
import { first_level_stations, second_level_stations, third_level_stations } from './Stations';

function WasalnyButton(props){
    
    function HowToGo(CurrentLVL,CurrentStation,DestLVL,DestStation){

        // If The Current Level Is The Destination Level - Same Level
        if(CurrentLVL==DestLVL){
            console.log(first_level_stations[first_level_stations.length - 1].name)
            if(CurrentStation>DestStation){
                props.sethowtogo(" اركب اتجاه "+(CurrentLVL==1?first_level_stations[1].name:CurrentLVL==2?second_level_stations[1].name:third_level_stations[1].name)+" ← انزل محطة "+(CurrentLVL==1?first_level_stations[parseInt(DestStation)].name:CurrentLVL==2?second_level_stations[parseInt(DestStation)].name:third_level_stations[parseInt(DestStation)].name)); 
                props.setStationscount(CurrentStation-DestStation);
            }
            else{
                props.sethowtogo(" اركب اتجاه "+(CurrentLVL==1?first_level_stations[first_level_stations.length - 1].name:(CurrentLVL==2?second_level_stations[second_level_stations.length - 1].name:third_level_stations[third_level_stations.length - 1].name))+" ← انزل محطة " +(CurrentLVL==1?first_level_stations[parseInt(DestStation)].name:CurrentLVL==2?second_level_stations[parseInt(DestStation)].name:third_level_stations[parseInt(DestStation)].name));
                props.setStationscount(DestStation-CurrentStation);
            }
        }

        // If The Current Level Is The First Level And Destination Level Is In The Second level
        if(CurrentLVL==1 && DestLVL==2){
            if(CurrentStation>19){
                if(DestStation>10){
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمه ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([CurrentStation-19])+parseInt([DestStation-10]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([CurrentStation-19])+parseInt([10-DestStation]));
                    
                }
            }
            else{
                if(DestStation>10){
                props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([19-CurrentStation])+parseInt([DestStation-10]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه المرج ← انزل محطة السادات و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([19-CurrentStation])+parseInt([10-DestStation]));
                }
            }
        }

        // If The Current Level Is The Second Level And Destination Level Is In The First level
        if(CurrentLVL==2 && DestLVL==1){
            if(CurrentStation>10){
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([CurrentStation-10])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([CurrentStation-10])+parseInt([19-DestStation]));
                }
            }
            else{
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([10-CurrentStation])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة السادات و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([10-CurrentStation])+parseInt([19-DestStation]));
                }
            }
        }

        // If The Current Level Is The First Level And Destination Level Is In The Third level
        if(CurrentLVL==1 && DestLVL==3){
            if(CurrentStation>20){
                if(DestStation>20){
                props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([CurrentStation-20])+parseInt([DestStation-20]));
            }
                else{
                    props.sethowtogo(" اركب اتجاه حلوان ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه ا اتجاه عدلي منصور← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([CurrentStation-20])+parseInt([20-DestStation]));
                }
            }
            else{
                if(DestStation>20){
                props.sethowtogo("  اركب اتجاه المرج ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([20-CurrentStation])+parseInt([DestStation-20]));
                }
                else{
                    props.sethowtogo("  اركب اتجاه المرج ← انزل محطة جمال عبد الناصر و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([20-CurrentStation])+parseInt([20-DestStation]));
                }
            }
        }

        // If The Current Level Is The Second Level And Destination Level Is In The Third level
        if(CurrentLVL==2 && DestLVL==3){
            if(CurrentStation>12){
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([CurrentStation-12])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه المنيب ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([CurrentStation-12])+parseInt([19-DestStation]));
                }
            }
            else{
                if(DestStation>19){
                props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه الكيت كات ← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([12-CurrentStation])+parseInt([DestStation-19]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه شبرا الخيمة ← انزل محطة العتبة و حول للخط التالت ← اركب اتجاه عدلي منصور ← انزل محطة "+third_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([12-CurrentStation])+parseInt([19-DestStation]));
                }
            }
        }

        // If The Current Level Is The Third Level And Destination Level Is In The Second level
        if(CurrentLVL==3 && DestLVL==2){
            if(CurrentStation>19){
                if(DestStation>12){
                props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([CurrentStation-19])+parseInt([DestStation-12]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([CurrentStation-19])+parseInt([12-DestStation]));
                }
            }
            else{
                if(DestStation>12){
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه شبرا الخيمة ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([19-CurrentStation])+parseInt([DestStation-12]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة العتبة و حول للخط التاني ← اركب اتجاه المنيب ← انزل محطة "+second_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([19-CurrentStation])+parseInt([12-DestStation]));
                }
            }
        }
        
        // If The Current Level Is The Third Level And Destination Level Is In The First level
        if(CurrentLVL==3 && DestLVL==1){
            if(CurrentStation>20){
                if(DestStation>20){
                props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([CurrentStation-20])+parseInt([DestStation-20]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه عدلي منصور ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([CurrentStation-20])+parseInt([20-DestStation]));
                }
            }
            else{
                if(DestStation>20){
                props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه المرج ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                props.setStationscount(parseInt([20-CurrentStation])+parseInt([DestStation-20]));
                }
                else{
                    props.sethowtogo(" اركب اتجاه الكيت كات ← انزل محطة جمال عبد الناصر و حول للخط الاول ← اركب اتجاه حلوان ← انزل محطة "+first_level_stations[parseInt(DestStation)].name);
                    props.setStationscount(parseInt([20-CurrentStation])+parseInt([20-DestStation]));
                }
            }
        }

        // If The Destination Station Is The Current Station - Same Station 
        if(CurrentLVL==DestLVL && CurrentStation==DestStation){
        props.sethowtogo(" ما انت كده في المحطة يسطا , ركز بالله عليك ");           
        }

    }


    return(
    <>
    <button type='submit' className='btn btn-primary rounded shadow-sm' onClick={() => { HowToGo((props.currentstation).charAt(0),(props.currentstation).charAt(1)+(props.currentstation).charAt(2),(props.destination).charAt(0),(props.destination).charAt(1)+(props.destination).charAt(2)) }}>وصلني</button>
    </>
    )
}
export default WasalnyButton;
