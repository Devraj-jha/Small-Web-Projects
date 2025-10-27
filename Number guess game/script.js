const num = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById('input');
const summit = document.getElementById('summit');
const check = document.getElementById('check');

function main() {
    let value = input.value;
    let number = Number(value);

    if (isNaN(number)) {
        check.textContent = "Please enter a valid number!";
        return;
    }

    if (number < 1 || number > 100) {
        check.textContent = "Number must be between 1 and 100!";
        return;
    }

    if (number < num) {
        check.textContent = "Too low!";
    } else if (number > num) {
        check.textContent = "Too high!";
    } else {
        check.textContent = `Correct! The number was ${num}`;
    }
}

summit.addEventListener("click", main);
