const card = document.querySelector('.card');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
};

function success(input){
   input.className = 'form-control is-valid';
};

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value)){
        success(input);
    }else{
        error(email, 'Type the E-mail correctly please..');
    }
};

function checkRequirement(inputs){
   
    inputs.forEach(function(input){
        if(input.value===''){
            error(input,`Type the ${input.id} please..`);
        }else{
            success(input);
        };
    });

};

form.addEventListener('submit', function(e){ 
    e.preventDefault();
    checkRequirement([username,email,password,repassword]);
    checkEmail(email);
});

