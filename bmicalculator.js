const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the default way

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height: ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = '';
        if (bmi < 18.6) {
            category = 'underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'normal range';
        } else {
            category = 'overweight';
        }
        results.innerHTML = `Your BMI is ${bmi}. You are in the ${category} category.`;
    }
});