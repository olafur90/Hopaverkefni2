const back = document.createElement('img');
const next = document.createElement('img');
const pause = document.createElement('img');
const play = document.createElement('img');
const mute = document.createElement('img');
const fullscreen = document.createElement('img');

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

document.body.appendChild(back);
document.body.appendChild(next);
document.body.appendChild(play);
document.body.appendChild(mute);
document.body.appendChild(fullscreen);

mute.addEventListener("click", function muteClick() {
  //mute and unmute? video
  console.log("muted");
});

next.addEventListener("click", function nextClick() {
  //jump forward 
  console.log("3 seconds forwards");
});

back.addEventListener("click", function backClick() {
  //jump back
  console.log("3 seconds back");
});

fullscreen.addEventListener("click", function fullscreenClick() {
  //enter fulscreen on the video
  console.log("big screen");
});

pause.addEventListener("click", function pauseClick() {
  //pause video and make play appear
  console.log("paused");
  document.body.removeChild(pause);
  document.body.appendChild(play);
});

play.addEventListener("click", function playClick() {
  //play video and make pause appear
  console.log("play");
  document.body.removeChild(play);
  document.body.appendChild(pause);
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
})

function getJson() {

}


/*function showResults(results) {

  const [{
    id,
    title,
    description,
    created,
    duration,
    poster,
    video,
    related,
  }] = results;

  const element =
    el('img', poster);


  results.appendChild(element);
}

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
