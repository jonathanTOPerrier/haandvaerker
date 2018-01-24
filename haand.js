// JavaScript Document
// let listByer = ['København', 'Nordsjælland', 'Århus'];
// let listHaand = ['VVS',]

// for (let i = 0; i < listByer.length; i++) {


// 	let sektionen = document.createElement('article');
// 	let titel = document.createElement('h2');
// 	let titelText = document.createTextNode(listByer[i]);
// 	titel.appendChild(titelText);
// 	let element = document.querySelector('main');
// 	sektionen.appendChild(titel);
// 	element.appendChild(sektionen);
// 	let uListe = document.create

// }





let clickeren = document.querySelectorAll('h2');
let listen = document.querySelectorAll('ul');
let clickliste = [];


for (let i = 0; i < clickeren.length; i++) {

	clickliste.push(clickeren[i]);
	clickeren[i].addEventListener('click', show);

}


function show() {
	let q;

	q = clickliste.indexOf(this);
	listen[q].classList.toggle('hidden');

}


