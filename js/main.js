/* $.getJSON('../videos.json', function(data) {

}); */

const titill = document.createElement('h1');
const warpgate = document.createElement('a');

warpgate.setAttribute('href', 'video.html');
warpgate.innerText = 'Shortcut';
titill.innerText = 'Fræðslumyndbandaleigan';

document.body.appendChild(titill);
document.body.appendChild(warpgate);
