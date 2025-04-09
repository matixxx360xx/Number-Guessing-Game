const prompt = require('prompt-sync')();



while(true){
    console.log("Witaj w grze zgadnij liczbe!\n Wybierz poziom trudności:\n1. Łatwy (1-10)\n2. Średni (1-50)\n3. Trudny (1-100)");
    const level = parseInt(prompt("Wybierz poziom trudności (1-3): "));

switch(level){
    case 1:
        playGame(10);
        break;
    case 2:
        playGame(50);
        break;
    case 3:
        playGame(100);
        break;
    default:
        console.log("Niepoprawny wybór. Wybierz 1, 2 lub 3.");
        continue;
}

function playGame(max){
    const randomNumber = Math.floor(Math.random() * max) + 1;
    let attempts = 0;
    let number;
    while(randomNumber !== number){
        number = parseInt(prompt("Wybierz liczbe: "));
        attempts++;
        if(number < randomNumber){
            console.log("Za mało!");
        } else if(number > randomNumber){
            console.log("Za dużo!");
        } else {
            console.log(`Brawo! Zgadłeś liczbę ${randomNumber} w ${attempts} próbach!`);
            break;
        }
    }
}
}