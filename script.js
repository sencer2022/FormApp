const card = document.querySelector('.card');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input1, message){
    input1.className = 'form-control is-invalid';
    const div = input1.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
};

function success(input1){
   input1.className = 'form-control is-valid';
};

function checkEmail(input1) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(String(input1.value).toLowerCase())){
        success(input1);
    }else{
        error(email, 'Type the E-mail correctly please..');
    }

    //return re.test(input1.value);
    return re.test(String(input1.value).toLowerCase());
};

function checkRequirement(input1s){
   
    input1s.forEach(function(input1){
        if(input1.value===''){
            error(input1,`Type the ${input1.id} please..`);
        }else{
            success(input1);
        };
    });

};

function checkLength(input1, min, max){
    if(input1.value.length < min){
        error(input1, `${input1.id} has to be min ${min} characters.`);
        card.className = 'card error';
    }else if(input1.value.length > max){
        error(input1, `${input1.id} has to be max ${max} characters.`);
        card.className = 'card error';
    }else{
        success(input1)
    }
}

form.addEventListener('submit', function(e){ 
    e.preventDefault();
    checkRequirement([username,email,password,repassword]);
    checkEmail(email);

    if(username.value ==='' || email.value ==='' || password.value ==='' || repassword.value ===''){
        card.className = 'card error';
    }else if(!checkEmail(email)){
        card.className = 'card error';
    }else{
        card.className = 'card success';
    };

    checkLength(username, 7, 15);
});

