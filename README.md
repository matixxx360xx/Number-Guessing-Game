# 🎯 Number Guessing Game

A simple **Node.js console game** where the player tries to guess a
randomly generated number within a chosen difficulty range.\
The game includes three difficulty levels and automatically saves high
scores (leaderboards) to a JSON file.

***Note: User instructions in the game interface are written in
Polish.***

------------------------------------------------------------------------

## ✨ Features

-   **Three difficulty levels:**
    -   Easy (1--10)
    -   Medium (1--50)
    -   Hard (1--100)
-   Interactive guessing with hints:
    -   "Too low"
    -   "Too high"
-   Automatic saving of results (attempt count) to `leaderboards.json`
-   Displaying a leaderboard for each difficulty level
-   Option to play again after guessing the correct number
-   Clean and simple terminal interface

------------------------------------------------------------------------

## 📦 Requirements

-   Node.js (version 14 or higher)
-   NPM module: `prompt-sync`

------------------------------------------------------------------------

## 🚀 Installation

1.  Clone the repository or download the files:

``` bash
git clone https://github.com/matixxx360xx/Number-Guessing-Game.git
cd number-guessing-game
npm install prompt-sync
node index.js
```

------------------------------------------------------------------------

## 🧭 How to Play

1.  After launching the program, choose one of the menu options:

    -   **Play Number Guessing**
    -   **Show Results (Leaderboard)**
    -   **Exit**

2.  If you start the game, select a difficulty level:

    -   Easy (1--10)
    -   Medium (1--50)
    -   Hard (1--100)

3.  Enter your guesses until you find the correct number.\
    The game will guide you with hints like "too low" or "too high".

4.  After guessing correctly, you can choose to play again or return to
    the main menu.

------------------------------------------------------------------------

## 📘 Notes

-   Results are saved locally in the `leaderboards.json` file.
-   The leaderboard is loaded each time to preserve progress.
-   The game runs entirely in the console (text mode).

------------------------------------------------------------------------
