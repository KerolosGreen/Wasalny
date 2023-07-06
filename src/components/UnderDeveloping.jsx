import React from 'react';
import ReactDOM from 'react-dom';


function UnderDeveloping(){

    function CloseUnderDeveloping(){
        document.getElementById("UnderDevelopingClass").style.display='none';
    }

    

    return(
    <div id='UnderDevelopingClass'>
        <div class="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
            <div class="modal-header border-bottom-0">
            {/* <h1 class=" mx-auto modal-title fs-5">Modal title</h1> */}
            </div>
            <div class="modal-body py-0">
            <p>لمواخذه يا ابو الصحاب لسه بظبط حته المحطات دي عشان تقيلة سيكا و فيها شغل كتير و محطات الدولة كلها محتاجه تتحط كويس</p>
            </div>
             <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
              <button type="button" class="btn btn-lg btn-primary" onClick={CloseUnderDeveloping}>خالصة يخويا الله يعينك</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default UnderDeveloping