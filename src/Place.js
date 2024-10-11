class Place {
	constructor(title, content, img) {
		this.title = title;
		this.content = content;
		this.img = img;
	}

	static places = [];

	static createPlaces(places) {
		places.forEach((place) => {
			const { title, content, img } = place;
			Place.places.push(new Place(title, content, img));
		});
	}
}

export default Place;
