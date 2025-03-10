const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.Register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const close = document.querySelector('.close');

loginlink.addEventListener('click', ()=> {wrapper.classList.add('active')});
Registerlink.addEventListener('click', ()=> {wrapper.classList.remove('active')});
btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup')});
close.addEventListener('click', ()=> {wrapper.classList.remove('active-popup')});