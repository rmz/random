const fruits = ['apple', 'banana', 'cherry', 'peach', 'elderberry'];
const randomIndex = Math.floor(Math.random() * fruits.length);
const randomFruit = fruits[randomIndex];
console.log(randomFruit); // Outputs a random fruit from the array

function getRandomFruit() {
    var randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}

// Print to console
console.log("Random fruit from function:", getRandomFruit());