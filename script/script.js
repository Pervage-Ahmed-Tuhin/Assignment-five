
let count = 0;
let countInner = 1
const modalGoingButton = document.getElementById('Next-button-to-get-modal');
let totalPrice = 0;


function innerSection() {
    const value2 = document.getElementById('offer-section');
    value2.classList.add('hidden');
    const value = document.getElementById('banner-section');
    value.classList.add('hidden');
    const value3 = document.getElementById('upper1');
    value3.classList.remove('hidden');
    const value4 = document.getElementById('upper2');
    value4.classList.remove('hidden');
    document.getElementById('apply-button-mother').childNodes[3].setAttribute('disabled', 'true');
    modalGoingButton.setAttribute('disabled', 'true');
}



// loop section for cards
const cards = document.querySelectorAll('.cards');


for (let index = 0; index < cards.length; index++) {
    const card = cards[index];

    card.addEventListener('click', function (event) {
        const textName = card.innerText;
        
        if (count < 4) {

            event.target.style.backgroundColor = '#1DD100';
            event.target.style.color = 'white';
            count++;
            card.setAttribute('disabled-clicks','true');
            SeatSelectedCounter();
            const seatLeft = handleSeatLeft();
            updatedSeatLeft(seatLeft);
            tableUpdater(textName, count);

            totalPriceCounter();

            if (count === 4) {
                document.getElementById('apply-button-mother').childNodes[3].removeAttribute('disabled');
                checkInputs();

            }


        }
        else {
            alert("You can only select four seats");
        }




    })
}


function checkInputs() {

    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('Email');
    const PhoneNumberInput = document.getElementById('Phone-num-input');

    inputName.addEventListener('input', checkInputOfFields);
    inputEmail.addEventListener('input', checkInputOfFields);
    PhoneNumberInput.addEventListener('input', checkInputOfFields);

    function checkInputOfFields() {
        const nameInput = inputName.value;
        const emailInput = inputEmail.value;
        const phoneNumbersInput = PhoneNumberInput.value;

        if (nameInput && emailInput && phoneNumbersInput && /^\d+$/.test(phoneNumbersInput)) {
            modalGoingButton.removeAttribute('disabled');
        }
        else {
            modalGoingButton.setAttribute('disabled', 'true');
        }
    }
}



// end of this function


// This function creates element in the table and appends it

/*

<tr class="text-center">
                            <td>1</td>
                            <td>Economy Class</td>
                            <td>550</td>
                        </tr>


*/

function tableUpdater(textValue, counterSit) {

    const mainContainer = document.getElementById('Table-Box');

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.innerText = textValue;
    td2.innerText = "Economy Class";
    td3.innerText = "550Tk";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.classList.add('text-center');
    tr.classList.add('mt-[10px]');

    mainContainer.appendChild(tr);


}

// end of this function


// This function calculates the total price
function totalPriceCounter() {

    let ticketPrice = 550;
    const containerTotalPrice = document.getElementById('Total-price');

    totalPrice = ticketPrice + totalPrice;

    containerTotalPrice.innerText = totalPrice;


    const containerGrandTotalPrice = document.getElementById('Grand-total-price');

    containerGrandTotalPrice.innerText = totalPrice;



}
// This is the end of the function

// This function does the coupon test

function grandTotalCoupon(event) {

    const inputFieldInfo = document.getElementById('inputFieldInfo');



    if (inputFieldInfo.value === "NEW15") {


        const containerGrandTotalPrice = document.getElementById('Grand-total-price');
        totalPrice = totalPrice - (totalPrice * 0.15);
        containerGrandTotalPrice.innerText = totalPrice;
        event.target.classList.add('hidden');
        inputFieldInfo.classList.add('hidden');

    }
    else if (inputFieldInfo.value === "Couple 20") {
        const containerGrandTotalPrice = document.getElementById('Grand-total-price');
        totalPrice = totalPrice - (totalPrice * 0.20);
        containerGrandTotalPrice.innerText = totalPrice;
        event.target.classList.add('hidden');
        inputFieldInfo.classList.add('hidden');
    }
    else if (inputFieldInfo.value === " ") {
        alert("Enter valid coupon code first");
    }
    else {
        alert("Enter valid coupon code");
    }



}


// handles seat left counter

function handleSeatLeft() {
    const seat = document.getElementById('seat-left');
    const value = seat.innerText;
    const intValue = parseInt(value);
    return intValue - 1;

}

// sets updated sit count in the span

function updatedSeatLeft(value) {
    const updateArea = document.getElementById('seat-left');

    updateArea.innerText = value;
}


// sets the sit counter value in the table


function SeatSelectedCounter() {

    const counter = document.getElementById('Seat-Selected-counter');
    counter.innerText = countInner;
    countInner++;



}


// This function hides the inner part and shows the starting part











