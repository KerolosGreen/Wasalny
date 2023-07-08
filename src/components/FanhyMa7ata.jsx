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
    //         <option defaultValue value="01">حلوان</option>
    //         <option value="02">عين حلوان</option>
    //         <option value="03">جامعة حلوان</option>
    //         <option value="04">وادي حوف</option>
    //         <option value="05">حدائق حلوان</option>
    //         <option value="06">المعصرة</option>
    //         <option value="07">طرة الأسمنت</option>
    //         <option value="08">كوتسيكا</option>
    //         <option value="09">طرة البلد</option>
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
        
                <>
                <label>انت في محطة ايه؟</label>
                <select className="w-100 m-2 custom-select rounded" id="inputGroupSelect01" name='L5atrkmkam' onChange={onchangestation}>
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
                            </select>
                            </>


        )

    
}
export default FanhyMa7ata
