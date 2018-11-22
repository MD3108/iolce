/*
* This program 
* made by Daniel de Pinho Lucas
* src ="Front-end cursus"
*
*/

/***Menu*/
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
console.log(burger);

burger.addEventListener("click", function(){
	menu.classList.toggle('menu--open');
});




