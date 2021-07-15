const fullName = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if(fullName.value === '' || password.value === '') {
        messages.push('Name is required')
    } 

    if(password.value.length <= 6 ){
        messages.push('Password must be longer by six')
    }

    if(password.value.length >= 20 ){
        messages.push('Password must be lessr than 20')
    }

    if(password.value === 'password' ){
        messages.push('You cant select password')
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
    
})