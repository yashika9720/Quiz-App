// below array are contain (question, options, correct answer)
const array = [
	{
		Q:"1. What is Full Form Of HTML?",
		options:["Hyper Text MarkUp Language", "Hyper Text MakeUp Landguage", "Hyper Transfer MarkUp Language", "High Text MarkUp Langguage"],
		correct:0
	},
	{
		Q:"2. What is C++?",
		options:["Scripting language","Programming language", "MarkUp language", "None Of these"],
		correct:1
	},
	{
		Q:"3. What is CSS?",
		options:["Cascading Style Sheet","Create Style Sheet", "Cascading Shrink Style", "None Of these"],
		correct:0
	},
	{
		Q:"4. Who is the creater of HTML?",
		options:["Bjarne Stroustrup","Guido van Rossum", "Brendan Eich", "Tim Berners-Lee"],
		correct:3
	},
	{
		Q:"5. How to vibrate a device using JS?",
		options:["window.vibrate()", "document.vibrate", "navigator.vibrate()", "Can't vibrate using JS"],
		correct:2
	}
];

// some important variables
const container = document.querySelector('.container');
const scoreContainer = document.querySelector('#score');
const quizLength = array.length;
let index = 0;
let turn = 1;
let score = 0;

const check = (e, index)=>{
	const btns = document.querySelectorAll('button');
	const answer = array[index].options[array[index].correct];
	
	// predict a answer
	if (e.innerText != answer) {
		console.log(index)
		e.style.background = '#f00';
		btns[array[index].correct].style.background = '#00d600';
	}else{
		score++;
		scoreContainer.innerText = score;
		btns[array[index].correct].style.background = '#00d600';
	}

	// remove a onclick property from buttons
	btns.forEach(element =>{
		element.removeAttribute('onclick');
	});

	// create a new button for next question and for inform when quiz end
	const newBtn = document.createElement('button');
	newBtn.setAttribute('class', 'newBtn');
	
	if (turn == quizLength) {
		newBtn.innerText = 'Quiz End';
	}else{
		newBtn.innerText = 'Next';
		newBtn.setAttribute('onclick', 'display()')
		turn++;
	}
	container.appendChild(newBtn);
}

const display = ()=>{
	let html = `<h1>${array[index].Q}</h1>
					<div class="buttons">
						<button onclick='check(this, ${index})'>${array[index].options[0]}</button>
						<button onclick='check(this, ${index})'>${array[index].options[1]}</button>
						<button onclick='check(this, ${index})'>${array[index].options[2]}</button>
						<button onclick='check(this, ${index})'>${array[index].options[3]}</button>
					</div>`; 
	container.innerHTML = html; 
	index++;
}

display(); // invoke a display function