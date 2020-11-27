/* $.getJSON('../videos.json', function(data) {

}); */

const titill = document.createElement('h1');
const warpgate = document.createElement('a');

const foot = document.createElement('p');

warpgate.setAttribute('href', 'video.html');
warpgate.innerText = 'Shortcut';
titill.innerText = 'Fræðslumyndbandaleigan';
foot.innerText = '@ fræðslumyndbandaleigan';

document.body.appendChild(titill);
document.body.appendChild(warpgate);
document.body.appendChild(foot);
