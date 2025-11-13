# Number Guessing Game

Prosta konsolowa gra w Node.js, w której użytkownik próbuje zgadnąć wylosowaną liczbę z wybranego zakresu. Gra oferuje trzy poziomy trudności oraz zapis i wyświetlanie wyników (leaderboard) w pliku JSON.

---

## Funkcjonalności

- Wybór poziomu trudności:
  - Łatwy (1-10)
  - Średni (1-50)
  - Trudny (1-100)
- Zgadywanie liczby z podpowiedziami „Za mało” lub „Za dużo”
- Zapisywanie wyników (liczba prób) w leaderboard do pliku `leaderboards.json`
- Wyświetlanie leaderboard dla każdego poziomu
- Prośba o ponowną grę po odgadnięciu liczby
- Prosty interfejs tekstowy w konsoli

---

## Wymagania

- Node.js (wersja 14 lub wyższa)
- Moduł npm: `prompt-sync`

---

## Instalacja

1. Sklonuj repozytorium lub pobierz pliki  
   ```bash
   git clone https://github.com/matixxx360xx/Number-Guessing-Game.git
   cd number-guessing-game
   npm install prompt-sync
   node index.js


## Jak korzystać

1. Po uruchomieniu programu wybierz jedną z opcji w menu:
   - **Graj w zgadnij liczbę**
   - **Wyświetl wyniki (leaderboard)**
   - **Wyjście z gry**

2. Jeśli wybierzesz grę, wybierz poziom trudności:
   - Łatwy (1-10)
   - Średni (1-50)
   - Trudny (1-100)

3. Wpisuj liczby, aż odgadniesz wylosowaną liczbę.

4. Po odgadnięciu możesz wybrać, czy chcesz zagrać ponownie, czy wrócić do menu głównego.

---

## Uwagi

- Wyniki są zapisywane lokalnie w pliku `leaderboards.json`.
- Przy każdym uruchomieniu gry plik jest wczytywany, aby zachować historię wyników.
- Gra działa w trybie tekstowym w konsoli.
