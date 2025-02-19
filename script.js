let email = document.getElementById('email');
let errorM = document.getElementById('error');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let successM = document.getElementById('successM');

let step = 1;

step2.classList.add('hidden');

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  const address = email.value; // Get the email value inside the function

  if (!address) {
    errorM.innerText = 'Please enter an Email';
    email.classList.add('border-red-500', 'text-red-500', 'animate__animated', 'animate__shakeX')
    
  } else {
    if (validateEmail(address)) {
      errorM.innerText = '';
      step += 1;
      updateUI();
      successM.innerText = `A confirmation email has been sent to ${address}. Please open it and click the button inside to confirm your subscription.`;
      
      email.classList.remove('border-red-500', 'text-red-500', 'animate__animated', 'animate__shakeX')
    } else {
      errorM.innerText = 'Please enter a Valid Email';
      email.classList.add('border-red-500', 'text-red-500', 'animate__animated', 'animate__shakeX')
    }
  }
}

function updateUI() {
  if (step === 1) {
    step1.classList.remove('hidden');
    step2.classList.add('hidden');
  } else if (step === 2) {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  }
}

function done(){
  step = 1;
  email.value = ''
  updateUI()
}