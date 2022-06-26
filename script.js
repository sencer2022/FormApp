const card = document.querySelector('.card');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');



form.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log(username.value);
    //console.log(password.value);

    if(username.value ===''){
        card.className ='card error1';
        //username.className = 'form-control error1';
        username.classList = 'form-control is-invalid';
    }else {
        username.className = 'form-control is-valid';
    }

    if(email.value ===''){
        card.className ='card error1';
        email.className = 'form-control is-invalid';
    }

    if(password.value ===''){
        card.className ='card error1';
        password.className = 'form-control is-invalid';
    }

    if(repassword.value ===''){
        card.className ='card error1';
        repassword.className = 'form-control is-invalid';
    }
});

