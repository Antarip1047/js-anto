# Projects related to dom

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## own project link
[Click here 1](https://stackblitz.com/edit/dom-project-chaiaurcode-ewoml7?file=1-colorChanger%2Fchaiaurcode.js)

[Click here 2](https://stackblitz.com/edit/dom-project-chaiaurcode-ewoml7?file=2-BMICalculator%2Fchaiaurcode.js)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (e) {
    //console.log(e);
    //console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //to show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `${bmi} is Under weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `${bmi} is normal range`;
    } else {
      results.innerHTML = `${bmi} is Overweight`;
    }
  }
});

```