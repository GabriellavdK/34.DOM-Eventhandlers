// opdracht 1 Geef een alert als je op de button klikt. 
const buttonClicked = document.querySelector("#mybutton");

buttonClicked.addEventListener('click', function(){
	alert("button clicked");
})

// opdracht 2 Geef de achtergrond een rode kleur door op de button te klikken. 
const bodyTag = document.querySelector("body");
bodyTag.classList.add("blue-background");

// const changeColor = function(){
// 	bodyTag.classList.add("red-background");
// }

// bodyTag.addEventListener('click', changeColor);

// opdracht 3 Toggle de achtergrondkleur door op de button te klikken. 
const toggleColor = function(){
	bodyTag.classList.toggle("red-background");
}

bodyTag.addEventListener('click', toggleColor);