window.onload = function(){
const nav = document.querySelector('nav')
const hiden_menu = document.querySelector('.hiden_menu')
const content = document.querySelector('.content')
hiden_menu.onclick = function(){
    nav.classList.toggle('hide')
    content.classList.toggle('expand')
    }
}