burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
box2=document.querySelector('.box2');
box3=document.querySelector('.box3');
box4=document.querySelector('.box4');
box5=document.querySelector('.box5');
box6=document.querySelector('.box6');
box7=document.querySelector('.box7');
body=document.querySelector('body');


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    body.classList.toggle('body-change');
    box2.classList.toggle('v-class-resp');
    box3.classList.toggle('v-class-resp');
    box4.classList.toggle('v-class-resp');
    box5.classList.toggle('v-class-resp');
    box6.classList.toggle('v-class-resp');
    box7.classList.toggle('v-class-resp');
})