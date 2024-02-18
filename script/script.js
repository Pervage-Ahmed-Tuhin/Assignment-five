


function innerSection(){
    const value2 = document.getElementById('offer-section');
    value2.classList.add('hidden');
    const value = document.getElementById('banner-section');
    value.classList.add('hidden');
    const value3 = document.getElementById('upper1');
    value3.classList.remove('hidden');
    const value4 = document.getElementById('upper2');
    value4.classList.remove('hidden');
}

// This function hides the inner part and shows the starting part
function modalContinue(){

    // const value = document.getElementById('modal-continue-btn');

    
    const value = document.getElementById('banner-section');
    value.classList.remove('hidden');
    const value2 = document.getElementById('offer-section');
    value2.classList.remove('hidden');
    const value3 = document.getElementById('upper1');
    value3.classList.add('hidden');
    const value4 = document.getElementById('upper2');
    value4.classList.add('hidden');

}

//This function hides everything accepts the modal section



   
  
  






