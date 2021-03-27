const breakfestButton = document.querySelector('.breakfast');
const lunchDinnerButton = document.querySelector('.lunch-dinner');
const dessertsButton = document.querySelector('.desserts');

let foods = document.querySelectorAll('.food');
let foodsH1 = document.querySelectorAll('.food h3');
let foodsImg = document.querySelectorAll('.food img');
let foodsDesc = document.querySelectorAll('.food p');

lunchDinnerButton.addEventListener('click', changeLunchdDinner);
breakfestButton.addEventListener('click', changeBreakfast);
dessertsButton.addEventListener('click', changeDessert);


let lunchDinnerNames = [
	'Hamburger $15', 'Italian Pasta $20', 'Beans $15', 'Salad $15', 'Barbecue $25'
]
let lunchdinnerImages = [
	'images/burg.jpg', 'images/burg.jpg', 'images/burg.jpg', 'images/burg.jpg', 'images/burg.jpg'
]
lunchDinnerDesc = [
	'Garlic bread, salad, chesse and meat, comes with french fries, soda or juice of your choice,', 
	'Pasta, cheese and tomatoes', 
	'Comes with bacon, rice and meat', 
	'Of your choice, tomatoes, onion, lettuce', 
	'You can choose one or more meats, we serve chicken, porch and beef' 
]
function changeBreakfast() {
	for(let i = 0; i < 5; i++) {
		foodsH1[i].innerHTML = breakfastNames[i];
		foodsImg[i].src = breakfastImages[i];
		foodsDesc[i].innerHTML = breakfastDesc[i];

		breakfestButton.classList.add('active');
		lunchDinnerButton.classList.remove('active');
		dessertsButton.classList.remove('active');
	}
}

let breakfastNames = [
	'Toasts With Honey $10', 'Afogatto $15', 'Bacon and eggs $20', 'Wafers $15', 'Cupcakes $10'
]
let breakfastImages = [
	'images/breakfast.jpg', 'images/breakfast.jpg', 'images/breakfast.jpg', 'images/breakfast.jpg', 'images/breakfast.jpg'
]
breakfastDesc = [
	'Comes with coffe, it\'s served with natural honey and bread of your choice', 
	'Black coffe, with chocolate or cream ice cream', 
	'Bacon, 2 fried or boiled eggs', 
	'3 or more wafers with maple syrup', 
	'Vanilla, chocolate or strawberry flavored cupcakes', 
]
function changeLunchdDinner() {
	for(let i = 0; i < 5; i++) {
		foodsH1[i].innerHTML = lunchDinnerNames[i];
		foodsImg[i].src = lunchdinnerImages[i];
		foodsDesc[i].innerHTML = lunchDinnerDesc[i];

		breakfestButton.classList.remove('active');
		lunchDinnerButton.classList.add('active');
		dessertsButton.classList.remove('active');
	}
}

let dessertNames = [
	'Cake $30', 'Donut $5', 'Jam cookies $15', 'Ice Cream Pizza $10', 'Cupcakes $10'
]
let dessertImages = [
	'images/dessert.jpg', 'images/dessert.jpg', 'images/dessert.jpg', 'images/dessert.jpg', 'images/dessert.jpg'
]
dessertDesc = [
	'The whole cake, 550g', 
	'Strawberry, chocolate, bluberry or honey flavored', 
	'Pack with 10, heart shaped', 
	'Piece of 150g, vanilla ice cream and toppings', 
	'Vanilla, chocolate or strawberry flavored cupcakes', 
]
function changeDessert() {
	for(let i = 0; i < 5; i++) {
		foodsH1[i].innerHTML = dessertNames[i];
		foodsImg[i].src = dessertImages[i];
		foodsDesc[i].innerHTML = dessertDesc[i];

		breakfestButton.classList.remove('active');
		lunchDinnerButton.classList.remove('active');
		dessertsButton.classList.add('active');
	}
}

const button1 = document.querySelector('.text-1');
const button2 = document.querySelector('.text-2');
const button3 = document.querySelector('.text-3');
let ps = document.querySelectorAll('.quote-text p')

button1.addEventListener('click', text1);
button2.addEventListener('click', text2);
button3.addEventListener('click', text3);

function text1() {
	ps[0].classList.remove('none');
	ps[1].classList.add('none');
	ps[2].classList.add('none');
}
function text2() {
	ps[0].classList.add('none');
	ps[1].classList.remove('none');
	ps[2].classList.add('none');
}
function text3() {
	ps[0].classList.add('none');
	ps[1].classList.add('none');
	ps[2].classList.remove('none');
}