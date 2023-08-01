import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppBodyFunction from './AppBodyFunction';
import AppHeader from './AppHeader';
import AppBottom from './AppBottom';
import Footer from './Footer';

const ThisYear = new Date();
function AppBody(){
    const[howtogonow,sethowtogonow]=useState("");
    const [Stationscount , setStationscount]=useState("");
    return(
        <div className='AppBodyClass'>
            {/*AD*/}
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9275465709873085"
     crossorigin="anonymous"></script>
<!-- Wasalny AD1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9275465709873085"
     data-ad-slot="2908753533"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
            {/*AD*/}
            <AppHeader/>
            <AppBodyFunction sethowtogonow={sethowtogonow} setStationscount={setStationscount}/>
            <AppBottom howtogonow={howtogonow}  Stationscount={Stationscount} />
            <Footer/>
        </div>
    )
}
export default AppBody
