import './style.css';
import Place from './Place';
import fetchContent from './fetch';

const URL =
	'https://petrik-utazas-default-rtdb.europe-west1.firebasedatabase.app/travelDestinations.json';

const template = document.querySelector('#card-template');
const spinner = document.querySelector('#spinner');
const container = document.querySelector('.container');

const renderPlaces = (places) => {
	places.forEach((place) => {
		const card = template.content.cloneNode(true);
		card.querySelector('.title').textContent = place.title;
		card.querySelector('.content').textContent = place.content;
		card.querySelector('.image').src = place.img;
		card.querySelector('.image').alt = place.title;
		container.appendChild(card);
	});
};

const init = async () => {
	spinner.style.display = 'block';
	const data = await fetchContent(URL);
	Place.createPlaces(data);
	renderPlaces(Place.places);
	spinner.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', init);
