let gen_btn = document.querySelector(".js-generate-btn");
let results = document.querySelector(".js-results");


// nupuvajutusega luuakse vastav koguses ja kindlas vahemikus suvalisi numbreid
gen_btn.addEventListener("click", () => {
    let input = document.getElementById("js-dice-input").value;
    let dices = input.toString().split('+');
    // console.log(dices); // kontroll
    let rolls = dices.toString().split(/[d,]+/); // lahutan massiivis numbrid.
    // console.log(rolls); // kontroll
    // koostan massiivid täringu koguste ja saadud silmade arvu salvestamiseks
    let dice = [];
    let maxAmount = [];

    // for loop visatud täringute ja saadud silmade arvude eraldamiseks
    for (i = 0; i < rolls.length; i++) {
        if (i % 2 == 0) {
            dice.push(rolls[i]);
        } else {
            maxAmount.push(rolls[i]);
        }
    };
    // console.log(dice); // kontroll
    // console.log(maxAmount); // kontroll

    // muudan tekitatud string massiivid integralideks 
    let diceInt = [];
    let maxAmountInt = [];

    maxAmount.forEach(str => {
        maxAmountInt.push(Number(str));
    });

    // console.log(maxAmountInt); // kontroll

    dice.forEach(str => {
        diceInt.push(Number(str));
    });

    // console.log(diceInt); // kontroll

    let min = 1;
    let rolledAmountArr = [];
    // 
    let totalRolls = 0;
    for (var i in dice) {
        totalRolls += diceInt[i];
    }
    console.log(dice);
    // genereerin suvalised arvud ja arvutan need kokku,
    for (i = 0; i < dice.length; i++) {
        for (let j of dice[i]) {
            while (j > 0) {
                let rolledAmount = Math.round(Math.random() * (maxAmountInt[i] - min) + min);
                rolledAmountArr.push(rolledAmount);
                j--;
                }
                // console.log(a);
            }
        }

        // console.log(rolledAmount); // kontroll

        // document.querySelector(".js-results").innerHTML = rolledAmountArr;
        document.querySelector(".js-results").innerHTML = rolledAmountArr;
    }

);

// delete input
function clearField(inputID) {
    document.getElementById(inputID).value = '';
}
