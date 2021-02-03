// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//Loop over and create an image for the amount of Pokemon there are and append each element to the container.
for(let i = 1; i <= 151; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('pokemon'); //Give each new div a class of Pokemon.
  const label = document.createElement('span');
  label.innerText = `#${i}`; //Give each image a number each time the loop runs.
  const newImg = document.createElement('img');
  newImg.src = `${baseURL}${i}.png` //Add the image number to the end of the base url each time the loop runs to get the next image.

  newDiv.appendChild(newImg)
  newDiv.appendChild(label)
  container.appendChild(newDiv)
}