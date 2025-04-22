const prompt = require('prompt-sync')();
const fs = require('fs');

let easy = [];
let medium = [];
let hard = [];

function Options(){
    while(true){
    console.log("Wybierz opcje:\n1. Gra w zgadnij liczbe\n2. Wyniki \n3. Wyjscie ");
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
    const data = {
        easy,
        medium,
        hard
    };

    

    if (max == 10) {
        data.easy.push({ attempts });
    } else if (max == 50) {
        data.medium.push({ attempts });
    } else if (max == 100) {
        data.hard.push({ attempts });
    }

    fs.writeFileSync('leaderboards.json', JSON.stringify(data), 'utf-8');
}

function loadFromFile() {
    if (fs.existsSync('leaderboards.json')) {
        const existingData = JSON.parse(fs.readFileSync('leaderboards.json', 'utf8'));
        easy = existingData.easy || [];
        medium = existingData.medium || [];
        hard = existingData.hard || [];
    } else {
        console.log("Brak zapisanych wyników.");
        return;
    }
}
function Leaderboards(){
    console.log("=== Leaderboard ===");
    console.log("Łatwy:");
    easy.forEach((entry, index) => console.log(`${index + 1}. Próby: ${entry.attempts}`));
    console.log("Średni:");
    medium.forEach((entry, index) => console.log(`${index + 1}. Próby: ${entry.attempts}`));
    console.log("Trudny:");
    hard.forEach((entry, index) => console.log(`${index + 1}. Próby: ${entry.attempts}`));
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
        Options();
        break;
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
                console.log("Dziękujemy za grę!");
                process.exit(0);
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
