// föll sem taka element og data sem viðfang og byr til hlut á elementið eftir því hvernig data það er.

export function makeLecturePart(element, data) {
	const type = data.type;
	if(type === "youtube"){
		console.log('youtube');
		makeYoutube(element,data);
	} else if(type === "text") {
		console.log('text');

	} else if(type === "image") {
		console.log('image');

	} else if(type === "quote") {
		console.log('quote');

	} else if(type === "code") {
		console.log('code');

	} else if(type === "heading") {
		console.log('heading');

	} else if(type === "list") {
		console.log('list');

	} 

}

function makeYoutube(element, data) {
	const iframe = document.createElement('iframe');
	const URL = data.data;

  iframe.setAttribute('src', `${URL}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`);
	iframe.setAttribute('class', 'video');
	
	element.appendChild(iframe);
}

function makeText(element, data) {
 
}

function makeHeading(element, data) {
 
}

function makeList(element, data) {
 
}

function makeQuote(element, data) {
 
}

function makeCode(element, data) {
 
}

function makeImage(element, data) {

}
