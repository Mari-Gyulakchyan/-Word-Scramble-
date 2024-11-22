
# Word Scramble Game

This project is a simple "Word Scramble" game implemented in JavaScript. It presents scrambled fruit names for the player to guess within a time limit. The player earns points for correct answers, with additional functionality for refreshing words and tracking statistics.

## Features
- Randomly scrambles fruit names for guessing.
- Provides a helpful hint for each fruit.
- Tracks player scores, including:
  - Correct answers
  - Incorrect attempts
  - Word refreshes
- Displays the final score at the end of the game.
- Timer functionality for added challenge.
- Fully interactive UI with error handling for user input.

## Demo
A live demo is available to explore the functionality.

## How to Play
1. Click "Start Game" to begin.
2. A scrambled fruit name and a hint will appear.
3. Enter your guess in the input box.
4. Click "Check Word" to verify your guess.
   - If correct, move to the next word.
   - If incorrect or time runs out, you lose a point.
5. Use the "Refresh Word" button if you're stuck (counts against your score).
6. The game ends after 5 rounds, displaying your final score.

## Technologies Used
- HTML
- CSS (Bootstrap for styling)
- JavaScript (for game logic)

## Code Overview
### Data Structure
The `fruitName` array contains the list of fruits with their hints:
```javascript
const fruitName = [
    { id: 1, label: "Orange", hint: "A round citrus fruit with a sweet, tangy flavor" },
    { id: 2, label: "Banana", hint: "A long, yellow fruit that's soft and sweet inside" },
    // More fruits...
];
```

### Key Functions
- **`randomArray()`**: Scrambles an array or string.
- **`newGame()`**: Initializes the game and manages the main gameplay logic.
- **`newWord()`**: Updates the scrambled word and hint for the current round.
- **`GameOver()`**: Displays the final score and a button to restart the game.

### Timer
A countdown timer is implemented to increase the challenge. If the timer runs out, the player automatically loses the round.

### Error Handling
The game provides feedback for invalid inputs:
- Missing input.
- Incorrect length.
- Wrong guesses.

### Example Output
When the game ends, the final score is displayed in a card format:
```html
<div class="card bg-light text-dark text-center">
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Success
            <span class="badge badge-primary badge-pill">3</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Wrong
            <span class="badge badge-primary badge-pill">2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Refresh
            <span class="badge badge-primary badge-pill">1</span>
        </li>
    </ul>
    <button class="btn btn-primary">Start Game</button>
</div>
```

## Installation
1. Clone this repository:
   ```bash
  
   git clone https://github.com/Mari-Gyulakchyan/-Word-Scramble-.git
   ```
2. Open `index.html` in your browser to play the game.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

## Contributing
Pull requests are welcome! If you find a bug or have a suggestion, please open an issue.

---
Happy Coding! 🎮
