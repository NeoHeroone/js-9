let x = +prompt("Birinchi sonni kiriting (x):");
let y = +prompt("Ikkinchi sonni kiriting (y):");

function getRandomNumberBetween(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

let randomNumber = getRandomNumberBetween(x, y);

alert(x + " va " + y + " orasidagi tasodifiy son: " + randomNumber);