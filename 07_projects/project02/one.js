const form = document.querySelector('form');
// This will ggive you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // to prevent get or post method

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is <span>${bmi}</span>, you are Underweight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `Your BMI is <span>${bmi}</span>, you are Normal`;
    } else {
      results.innerHTML = `Your BMI is <span>${bmi}</span>, you are Overweight`;
    }
  }
});
