import React from 'react';
import ReactDOM from 'react-dom';


function UnderDeveloping(props){
    function showunderdeveloping(){
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById("UnderDevelopingClass").style.display='flex';
          });
        
    }
    function CloseUnderDeveloping(){
        document.getElementById("UnderDevelopingClass").style.display='none';
    }

    

    return(
    <div id='UnderDevelopingClass'>
        {showunderdeveloping()}
        <div class="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
            <div class="modal-header border-bottom-0">
            </div>
            <div class="modal-body py-0">
            <p>بيتم تحديث المحطات دلوقت ، فبنعتذر عن اي خطأ ممكن يحصل او معلومات غير صحيحة حتي نهاية التحديث</p>
            </div>
             <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
              <button type="button" class="btn btn-lg btn-primary" onClick={CloseUnderDeveloping}>تمام</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default UnderDeveloping
