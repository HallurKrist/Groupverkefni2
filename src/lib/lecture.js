// föll sem taka element og data sem viðfang og byr til hlut á elementið eftir því hvernig data það er.

export function makeLecturePart(element, data) {
	const type = data.type;
	if(type === "youtube"){
		console.log('youtube');
		makeYoutube(element, data);
	} else if(type === "text") {
		console.log('text');
		makeText(element, data);
	} else if(type === "image") {
		console.log('image');
		makeImage(element, data);
	} else if(type === "quote") {
		console.log('quote');
		makeQuote(element, data);
	} else if(type === "code") {
		console.log('code');
		makeCode(element, data);
	} else if(type === "heading") {
		console.log('heading');
		makeHeading(element, data);
	} else if(type === "list") {
		console.log('list');
		makeList(element, data);
	} 

}

function makeYoutube(element, data) {
	const videoDiv = document.createElement('div');
	const iframe = document.createElement('iframe');
	const URL = data.data;

	videoDiv.classList.add('lecture__video');
	iframe.classList.add('lecture__video__video');
	//debugger;
	iframe.setAttribute('src', `${URL}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`);
//	iframe.setAttribute('width', "400");
//	iframe.setAttribute('height', "auto");
	
	videoDiv.appendChild(iframe);
	element.appendChild(videoDiv);
}

function makeText(element, data) {
	const textDiv = document.createElement('div');
	const text = document.createElement('p');

	textDiv.classList.add('lecture__text');
 
	text.appendChild(document.createTextNode(data.data));

	textDiv.appendChild(text);
	element.appendChild(textDiv);
}

function makeHeading(element, data) {
	const headDiv = document.createElement('div');
	const head = document.createElement('h2');

	headDiv.classList.add('lecture__heading');
	head.appendChild(document.createTextNode(data.data));

	headDiv.appendChild(head);
	element.appendChild(headDiv);
	//debugger; 
}

function makeList(element, data) {
	const listDiv = document.createElement('div');
	const list = document.createElement('ul');

	listDiv.classList.add('lecture__list');

	for(let listitem of data.data){
		let item = document.createElement('li');
		item.appendChild(document.createTextNode(listitem));
		list.appendChild(item);
	}	
	listDiv.appendChild(list);
	element.appendChild(listDiv);
}

function makeQuote(element, data) {
	const quote = document.createElement('div');
	const quotee = document.createElement('div');
	const quoteBundle = document.createElement('div');
	
	quote.classList.add('lecture__quote__quote');
	quotee.classList.add('lecture__quote__quotee');
	quoteBundle.classList.add('lecture__quote');

	quote.appendChild(document.createTextNode(data.data));
	quotee.appendChild(document.createTextNode(data.attribute));
	
	quoteBundle.appendChild(quote);
	quoteBundle.appendChild(quotee);

	element.appendChild(quoteBundle);
//	console.log(data.data);
	
}

function makeCode(element, data) {
	const codeDiv = document.createElement('div');
	const code = document.createElement('code');

	codeDiv.classList.add('lecture__code');
	//const code = data.data;
	code.appendChild(document.createTextNode(data.data));

	codeDiv.appendChild(code);
	element.appendChild(codeDiv);

	console.log(data.data);
	//debugger;
	//console.log(code);
}

function makeImage(element, data) {
	const img = document.createElement('img');
	const imgDiv = document.createElement('div');
	const imgCaption = document.createElement('div');
	
	imgDiv.classList.add('lecture__image');
	imgCaption.classList.add('lecture__image__caption');
	img.classList.add('lecture__image__img');

	const url = data.data;
	const caption = data.caption;

	imgCaption.appendChild(document.createTextNode(data.caption));
	img.setAttribute('src', url);

	imgDiv.appendChild(img);
	imgDiv.appendChild(imgCaption);

	element.appendChild(imgDiv);
}
