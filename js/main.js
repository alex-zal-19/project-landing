const form = documemt.querySelector('.form');
const input = documemt.querySelector('.form__input');


input.addEventListener('focus', function(){
    form.classList.add('form--active');
});

input.addEventListener('blur', function(){
    form.classList.remove('form--active');
});




