const prompt = require('prompt-sync')();
const fs = require('fs');

let easy = [];
let medium = [];
let hard = [];

function Options(){
    while(true){
    console.log("Wybierz opcje:\n1. Gra w zgadnij liczbe\n2. Wyniki \n3. Wyjście ");
    const option = parseInt(prompt("Wybierz opcje od 1-3: "));
    switch(option){
        case 1:
            Level(); 
            break;
        case 2:
            Leaderboards();
            break;
        case 3:
            console.log("Dziękujemy za grę!");
            process.exit(0);
        default:
            console.log("Niepoprawny wybór. Wybierz 1, 2 lub 3.");
            continue;
    }

    }
}


function saveToFile(max, attempts) {
    

    const levelsMap = {
        10: easy,
        50: medium,
        100: hard
    };

    levelsMap[max].push({ attempts });

    const data = {
        easy,
        medium,
        hard
    };

    fs.writeFileSync('leaderboards.json', JSON.stringify(data), 'utf-8');
}

function loadFromFile() {
    if (fs.existsSync('leaderboards.json')){
        try{
            const existingData = JSON.parse(fs.readFileSync('leaderboards.json', 'utf8'));
            easy = existingData.easy || [];
            medium = existingData.medium || [];
            hard = existingData.hard || [];
        }catch(error){
            console.log("Błąd podczas wczytywania wyników: plik może być uszkodzony.");
            console.error(error.message);
        }
    }else{
        console.log("Brak zapisanych wyników.");
        return;
    }
}
function Leaderboards(){
    console.log("=== Leaderboard ===");
    console.log("Łatwy:");
    easy.sort((a, b) => a.attempts - b.attempts).forEach((entry, index) => console.log(`${index + 1}. Próby: ${entry.attempts}`));
    console.log("Średni:");
    medium.sort((a, b) => a.attempts - b.attempts).forEach((entry, index) => console.log(`${index + 1}. Próby: ${entry.attempts}`));
    console.log("Trudny:");
    hard.sort((a, b) => a.attempts - b.attempts).forEach((entry, index) => console.log(`${index + 1}. Próby: ${entry.attempts}`));
}
function Level(){
while(true){
    console.log("Witaj w grze zgadnij liczbe!\n Wybierz poziom trudności:\n1. Łatwy (1-10)\n2. Średni (1-50)\n3. Trudny (1-100)\n4. Opcje");
    const level = parseInt(prompt("Wybierz poziom trudności (1-3) albo 4 jak chcesz wejsc w opcje: "));

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
    case 4:
        return;
    default:
        console.log("Niepoprawny wybór. Wybierz 1, 2 lub 3.");
        continue;
}
}
}

function playGame(max){
    const randomNumber = Math.floor(Math.random() * max) + 1;
    let attempts = 0;
    let number;
    while(randomNumber !== number){
        number = parseInt(prompt("Wybierz liczbę: "));
        if (isNaN(number)) {
            console.log("Niepoprawny wybór. Proszę wpisać liczbę.");
            continue;
        }
        attempts++;
        if(number < randomNumber){
            console.log("Za mało!");
        } else if(number > randomNumber){
            console.log("Za dużo!");
        } else {
          
            console.log(`Brawo! Zgadłeś liczbę ${randomNumber} w ${attempts} próbach!`);
            saveToFile(max, attempts);
            attempts = 0;
            if(!playAgain()) {
                Options();
            }
        }
    }
}


function playAgain() {
    while(true){
        const answer = prompt("Chcesz zagrać ponownie? (tak/nie): ").toLowerCase();
        if(answer == 'tak'){
            return true;
        }else if(answer == 'nie'){
            return false;
        }else{
            console.log("Niepoprawny wybór. Wpisz 'tak' lub 'nie'.");
        }
    }
}
loadFromFile();
Options();
