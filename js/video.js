const buttdiv = document.createElement('div');
const bdiv = document.createElement('div');
const fdiv = document.createElement('div');
const pdiv = document.createElement('div');
const mdiv = document.createElement('div');
const fudiv = document.createElement('div');

const back = document.createElement('img');
const next = document.createElement('img');
const pause = document.createElement('img');
const play = document.createElement('img');
const mute = document.createElement('img');
const fullscreen = document.createElement('img');

const video = document.createElement('video');
const src = document.createElement('source');

buttdiv.setAttribute('class', 'buttdiv');

back.setAttribute('src', 'img/back.svg');
back.setAttribute('alt', 'back button');
back.setAttribute('class', 'button');

next.setAttribute('src', 'img/next.svg');
next.setAttribute('alt', 'next button');
next.setAttribute('class', 'button');

pause.setAttribute('src', 'img/pause.svg');
pause.setAttribute('alt', 'pause button');
pause.setAttribute('class', 'button');

play.setAttribute('src', 'img/play.svg');
play.setAttribute('alt', 'play button');
play.setAttribute('class', 'button');

mute.setAttribute('src', 'img/mute.svg');
mute.setAttribute('alt', 'mute button');
mute.setAttribute('class', 'button');

fullscreen.setAttribute('src', 'img/fullscreen.svg');
fullscreen.setAttribute('alt', 'fullscreen button');
fullscreen.setAttribute('class', 'button');

// Einhvernvegin fá id???
video.setAttribute('class', 'video');
src.setAttribute('src', '../videos/bunny.mp4')

document.body.appendChild(video);
video.appendChild(src);

document.body.appendChild(buttdiv);
buttdiv.appendChild(bdiv);
buttdiv.appendChild(pdiv);
buttdiv.appendChild(mdiv);
buttdiv.appendChild(fudiv);
buttdiv.appendChild(fdiv);

bdiv.appendChild(back);
pdiv.appendChild(play);
mdiv.appendChild(mute);
fudiv.appendChild(fullscreen);
fdiv.appendChild(next);

mute.addEventListener("click", function muteClick() {
  //mute and unmute? video
  if (video.muted === false) {
    video.muted = true;
  } else {
    video.muted = false;
  }
  
});

next.addEventListener("click", function nextClick() {
  //jump forward 
  video.currentTime = video.currentTime + 3;
});

back.addEventListener("click", function backClick() {
  //jump back
  video.currentTime = video.currentTime - 3;
});

fullscreen.addEventListener("click", function fullscreenClick() {
  //enter fullscreen on the video
  video.requestFullscreen();
});

pause.addEventListener("click", function pauseClick() {
  //pause video and make play appear
  video.pause();
  pdiv.removeChild(pause);
  pdiv.appendChild(play);
});

play.addEventListener("click", function playClick() {
  //play video and make pause appear
  video.play();
  pdiv.removeChild(play);
  pdiv.appendChild(pause);
});

function el(name, ...children) {
  const element = document.createElement(name);

  for (let child of children) { /* eslint-disable-line */
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child) {
      element.appendChild(child);
    }
  }

  return element;
}
document.addEventListener('DOMContentLoaded', () => {
  let results;

  fetch('../videos.json')
  .then((result) => {
    results = result.data;
      return result.json();
  })
  .then((data) => {
    results = data;
    console.log(results);
    return results;
  });

  const body = el('body');
  body.appendChild(el('p', 'Gagn'));


})

function getJson() {

}


function showResults(shresults) {

  const [{
    id,
    title,
    description,
    created,
    duration,
    poster,
    video,
    related,
  }] = shresults;

  const element =
    el('img', poster);


  results.appendChild(element);
}

/*
fetch('../videos.json')
  .then((result) => {
    if(!result.ok) {
      throw new Error('Non 200 status');
    }

    console.log(result.json);
  })
    .then((data) => {
      showResults(data.results);
    })



/*
document.addEventListener('DOMContentLoaded', () => {
  let results;

  fetch('../videos.json')
    .then(function(result) {
        return result.json();
    })
    .then(function(data) {
      results = data;
    });

  console.log(results);
  let x = results[1];
  console.log(x);
})
*/
