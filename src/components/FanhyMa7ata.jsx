import React , { useState } from 'react';
import ReactDOM from 'react-dom';



function FanhyMa7ata(props){

    const [ma7atetak,setma7atetak]=useState("");



    function ma7atety(event){
        setma7atetak(event.target.value);

    }

    function ShowUnderDeveloping(){
        // document.getElementById("UnderDevelopingClass").style.display='block';
    }

    function onchangestation(event){
        props.setcurrentstation(event.target.value);
    }
    

    // if((props.namecurrentlevel)===1){
    //     return (    <>
    //         <label>انت في محطة ايه؟</label>
    //         <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={ma7atety} onClick={ShowUnderDeveloping}>
    //         <option defaultValue value="1">حلوان</option>
    //         <option value="2">عين حلوان</option>
    //         <option value="3">جامعة حلوان</option>
    //         <option value="4">وادي حوف</option>
    //         <option value="5">حدائق حلوان</option>
    //         <option value="6">المعصرة</option>
    //         <option value="7">طرة الأسمنت</option>
    //         <option value="8">كوتسيكا</option>
    //         <option value="9">طرة البلد</option>
    //         <option value="10">ثكنات المعادي</option>
    //         <option value="11">المعادي</option>
    //         <option value="12">حدائق المعادي</option>
    //         <option value="13">دار السلام</option>
    //         <option value="14">الزهراء</option>
    //         <option value="15">مارجرجس</option>
    //         <option value="16">الملك الصالح</option>
    //         <option value="17">السيدة زينب</option>
    //         <option value="18">سعد زغلول</option>
    //         <option value="19">السادات</option>
    //         <option value="20">جمال عبد الناصر</option>
    //         <option value="21">أحمد عرابي</option>
    //         <option value="22">الشهداء</option>
    //         <option value="23">غمرة</option>
    //         <option value="24">الدمرداش</option>
    //         <option value="25">منشية الصدر</option>
    //         <option value="26">كوبري القبة</option>
    //         <option value="27">حمامات القبة</option>
    //         <option value="28">سراي القبة</option>
    //         <option value="29">حدائق الزيتون</option>
    //         <option value="30">حلمية الزيتون</option>
    //         <option value="31">المطرية</option>
    //         <option value="32">عين شمس</option>
    //         <option value="33">عزبة النخل</option>
    //         <option value="34">المرج</option>
    //         <option value="35">المرج الجديدة</option>
    //     </select>
    //     {ma7atetak}
    //     </>)
    // }

    // if(props.namecurrentlevel===2){
    //     return (    <>
    //         <label>انت في محطة ايه؟</label>
    //         <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={ma7atety} onClick={ShowUnderDeveloping}>
    //         <option defaultValue value="1">المنيب</option>
    //         <option value="2">ساقية مكى</option>
    //         <option value="3">ضواحى الجيزة</option>
    //         <option value="4">محطة الجيزة</option>
    //         <option value="5">فيصل</option>
    //         <option value="6">جامعة القاهرة</option>
    //         <option value="7">الدقى</option>
    //         <option value="8">البحوث</option>
    //         <option value="9">الأوبرا</option>
    //         <option value="10">السادات</option>
    //         <option value="11">محمد نجيب</option>
    //         <option value="12">العتبة</option>
    //         <option value="13">الشهداء</option>
    //         <option value="14">مسرة</option>
    //         <option value="15">روض الفرج</option>
    //         <option value="16">سانت تريزا</option>
    //         <option value="17">الخلفاوى</option>
    //         <option value="18">المظلات</option>
    //         <option value="19">كلية الزراعة</option>
    //         <option value="20">شبرا الخيمة</option>

    //     </select>
    //     {ma7atetak}
    //     </>)
    // }

    



        // (props.namecurrentlevel==1?
        

        //     <h1>1</h1>

        // :
        // (props.namecurrentlevel==2?
        

        //     <h1>2</h1>
            
        //     :null)

        // )
        return(
        {...props.namecurrentlevel==1?
            <>
             <label>انت في محطة ايه؟</label>
             <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangestation} onClick={ShowUnderDeveloping}>
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
         
         </>:
         {...props.namecurrentlevel==2?
    <>
    <label>انت في محطة ايه؟</label>
    <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangestation}>
    <option defaultValue value="1">المنيب</option>
    <option value="2">ساقية مكى</option>
    <option value="3">أم المصريين</option>
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
</>:

             {...props.namecurrentlevel==3?
    <>
    <label>انت في محطة ايه؟</label>
    <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangestation}>
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
                                 <option value="20">ماسبيرو</option>
                                 <option value="21">الزمالك</option>
                                 <option value="22">الكيت كات</option>
</select>
</>:null}
             
         }
        }
         


        )

    
}
export default FanhyMa7ata
