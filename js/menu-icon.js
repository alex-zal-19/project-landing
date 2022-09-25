document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.navigation-list').classList.toggle('navigation-list--visible');
    document.querySelector('.logo').classList.toggle('logo--visible');
};