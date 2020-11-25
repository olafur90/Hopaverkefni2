const img = document.createElement('img');

img.setAttribute('src', 'img/back.svg');
img.setAttribute('alt', 'back button');

document.body.appendChild(img);


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
    .then(function(result) {
        return result.json();
    })
    .then(function(data) {
      console.log(data);
    });

})



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
