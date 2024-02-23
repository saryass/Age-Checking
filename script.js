const userInput = document.getElementById('user-input');
const submitBTN = document.getElementById('submitBTN');
const result = document.getElementById('result');

let age;



submitBTN.onclick = function () {

    age = userInput.value;


    if(age >= 100) {
        console.log('opss you are too old to enter this website!!');
        result.textContent = 'opss you are too old to enter this website!!';
        result.style.color='red';
    }

     else if (age >= 18) {

        console.log('You are old enough to enter this website.');
        result.textContent = 'You are old enough to enter this website.';
        result.style.color='blue';
    }

    else if (age == 0) {
        console.log('You can\'t enter since you were just born.');
        result.textContent = 'You can\'t enter since you were just born.';
        result.style.color='orange';
    }
    else if (age < 0) {
        console.log('Age can\'t be below 0.');
        result.textContent = 'Age can\'t be below 0.';
        result.style.color='black';
    }

    else if (age < 18) {
        console.log('Soory, you must be 18+ to enter this website.');
        result.textContent = 'Sorry, you must be 18+ to enter this website.';
        result.style.color='red';
    }
}