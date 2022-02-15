function getPin() {
   const pin = Math.round(Math.random() * 10000);
   const pinString = pin + '';
   if (pinString.length == 4) {
      return pin;
   }
   else {
      return getPin();

   }
}

function generatePin() {
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
}

document.getElementById("key-pad").addEventListener('click', function (event) {
   const number = event.target.innerText;
   const calcInput = document.getElementById("type-numbers");
   if (isNaN(number)) {
      if (number == 'C') {
         calcInput.value = '';

      }
   }
   else {
      const previousNumber = calcInput.value;
      const newNumber = previousNumber + number;
      calcInput.value = newNumber;
   }


});

function verifyPin() {
   const pin = document.getElementById('display-pin').value;
   const typedNumber = document.getElementById('type-numbers').value;
   const successMessage = document.getElementById('notify-success')
   const faillError = document.getElementById('notify-fail')

   if (pin == typedNumber) {
      const successMessage = document.getElementById('notify-success')
      faillError.style.display = 'none';
      successMessage.style.display = 'block';
   } else {
      const faillError = document.getElementById('notify-fail')
      successMessage.style.display = 'none';
      faillError.style.display = 'black';

   }
}