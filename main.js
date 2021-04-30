const input = document.querySelector('.content--input input');
const errorIcon = document.querySelector('.content--input img');
const submit = document.querySelector('.content--input a');
const message = document.getElementById('message');

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

function clearError(){
    errorIcon.style.display = 'none';
    message.innerText = '';
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(!input.value){
        errorIcon.style.display = 'block';
        message.innerText = 'Please provide an email';
    } else if (validEmail(input.value) === false){
        message.innerText = 'Please provide a valid email';
    }
    setTimeout(clearError, 2000);
});