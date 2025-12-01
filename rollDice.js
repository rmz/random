// Dice roll - https://www.youtube.com/watch?v=PXilNmL9U80
function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    let sum = 0;
    const images = [];

    // https://www.w3schools.com/js/js_loop_for.asp
    // sets a variable before loop starts, example below is i = 0
    // defines the condition for the loop to run, example below is i < numOfDice
    // increases a value (i) each time the code block in the loop has been executed, example below is i++
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        // Push value into rolls array and corresponding image into images array
        values.push(value);
        // Create an array of image and have an alt string backup in case image doesn't load
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
}
