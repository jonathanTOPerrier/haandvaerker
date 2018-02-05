// // JavaScript Document

// let listByer = ['Hovedstads Området', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding', 'Horsens', 'Vejle', 'Roskilde', 'Herning', 'Hørsholm', 'Helsingør', 'Silkeborg', 'Næstved', 'Fredericia', 'Viborg', 'Køge', 'Holstebro', 'Taastrup', 'Slagelse', 'Hillerød', 'Holbæk', 'Sønderborg'];
// let listHaand = ['VVS', 'Tømrer', 'Maler', 'Murer', 'Anlægsgartner', 'Brolægger', 'Elektriker', 'Entrepenør', 'Gulvsliber', 'Isolatør', 'Kloakmester', 'Snedker'];
// let listByerLink = ['Hovedstads_Omraadet', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding', 'Horsens', 'Vejle', 'Roskilde', 'Herning', 'Hoersholm', 'Helsingoer', 'Silkeborg', 'Naestved', 'Fredericia', 'Viborg', 'Koege', 'Holstebro', 'Taastrup', 'Slagelse', 'Hilleroed', 'Holbaek', 'Sonderborg'];


// let element = document.querySelector('main');
// let lavSekt = document.createElement('section');
// lavSekt.setAttribute('class', 'clearfix');


// for (let i = 0; i < listByer.length; i++) {


// 	if (i % 4 == 0) {
// 		element.appendChild(lavSekt);
// 		lavSekt = document.createElement('section');
// 		lavSekt.setAttribute('class', 'clearfix');
// 	}

// 	//laver artiklerne i forhold til mængden af byer

// 	let sektionen = document.createElement('article');
// 	sektionen.setAttribute('class', 'col3');


// 	//laver h2'erne

// 	let titel = document.createElement('h2');

// 	//giver h2'eren den tilsvarende titel

// 	let titelText = document.createTextNode(listByer[i]);

// 	//apender titlen til h2'en

// 	titel.appendChild(titelText);


// 	//gemmer h2'eren i artiklen

// 	sektionen.appendChild(titel);


// 	//laver en un ordered list

// 	let uListe = document.createElement('ul');
// 	uListe.setAttribute('class', 'hidden');

// 	//laver list items'ne til den UL

// 	for (let j = 0; j < listHaand.length; j++) {

// 		let listeItem = document.createElement('li');
// 		let linkTag = document.createElement('a');
// 		linkTag.setAttribute('href', `/by/${listByerLink[i]}/${listHaand[j]}.html`)
// 		let linkTekst = document.createTextNode(listHaand[j]);

// 		listeItem.appendChild(linkTag);
// 		linkTag.appendChild(linkTekst);
// 		uListe.appendChild(listeItem);

// 	}

// 	//putter den UL ind i Sektionen

// 	sektionen.appendChild(uListe);

// 	lavSekt.appendChild(sektionen);
// 	console.log(lavSekt);
// }


// element.appendChild(lavSekt);





// let clickeren = document.querySelectorAll('h2');
// let listen = document.querySelectorAll('ul');
// let clickliste = [];


// for (let i = 0; i < clickeren.length; i++) {

// 	clickliste.push(clickeren[i]);
// 	clickeren[i].addEventListener('click', show);

// }


// function show(e) {
// 	let q;
// 	console.log(e);
// 	q = clickliste.indexOf(e.target);
// 	listen[q].classList.toggle('hidden');

// }


var hider = true;
var ikon = document.querySelector('#menu_ikon');

ikon.addEventListener('click', () => {



    var menu = document.querySelector('nav');

    if (hider == true) {
        ikon.setAttribute('src', 'burger_x.png');
        menu.classList.toggle('hidden');
        menu.classList.toggle('color');
        hider = false;
    }
    else {
        ikon.setAttribute('src', 'burger.png');
        menu.classList.toggle('hidden');
        menu.classList.toggle('color');
        hider = true;
    }

});