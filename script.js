const breakfestButton = document.querySelector('.breakfast');
const lunchDinnerButton = document.querySelector('.lunch-dinner');
const dessertsButton = document.querySelector('.desserts');

let foods = document.querySelectorAll('.food');
let foodsH1 = document.querySelectorAll('.food h3');
let foodsImg = document.querySelectorAll('.food img');
let foodsDesc = document.querySelectorAll('.food p');

lunchDinnerButton.addEventListener('click', changeLunchdDinner);


let lunchDinnerNames = [
	'Hamburger $15', 'Italian Pasta $20', 'Beans $15', 'Salad $15', 'Barbecue $25'
]
let lunchdinnerImages = [
	'images/burg.jpg', 'images/burg.jpg', 'images/burg.jpg', 'images/burg.jpg', 'images/burg.jpg'
]
lunchDinnerDesc = [
	'Garlic bread, salad, chesse and meat, comes with french fries, soda or juice of your choice,', 'Pasta, cheese and tomatoes', 'Comes with bacon, rice and meat', 'Of your choice, tomatoes, onion, lettuce', 'You can choose one or more meats, we serve chicken, porch and beef', 
]
function changeLunchdDinner() {
	for(let i = 0; i < 5; i++) {
		foodsH1[i].innerHTML = lunchDinnerNames[i];
		foodsImg[i].src = lunchdinnerImages[i];
		foodsDesc[i].innerHTML = lunchDinnerDesc[i]
	}
}