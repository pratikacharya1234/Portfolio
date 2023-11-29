document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
    const result = document.querySelector('.result');
    const resetButton = document.getElementById('clear');
    let currentPlayer = 'X';
    let moves = 0;
    let gameOver = false;


    function checkForWin() {
        const winStreaks = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winStreaks) {
            const [a, b, c] = combination;
            if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
                result.textContent = `${currentPlayer} wins!`;
                gameOver = true;
            }
        }

        if (!gameOver && moves === 9) {
            result.textContent = "It's a draw!";
            gameOver = true;
        }
    }


    function computerMove() {
        if (!gameOver) {
            let emptyBoxes = Array.from(boxes).filter(box => !box.innerText);
            if (emptyBoxes.length > 0) {
                const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
                emptyBoxes[randomIndex].innerText = currentPlayer;
                moves++;
                checkForWin();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }


    function handleMove(event) {
        if (!gameOver && !event.target.innerText) {
            event.target.innerText = currentPlayer;
            moves++;
            checkForWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (!gameOver) {
                setTimeout(computerMove, 500); 
            }
        }
    }

    for (const box of boxes) {
        box.addEventListener('click', handleMove);
    }

    resetButton.addEventListener('click', function() {
        for (const box of boxes) {
            box.innerText = '';
        }
        result.textContent = '';
        currentPlayer = 'X';
        moves = 0;
        gameOver = false;
    });
});
