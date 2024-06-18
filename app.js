let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

document.getElementById('guess-button').addEventListener('click', function() {
    const guessInput = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');

    attemptsLeft--;
    attempts.textContent = `Attempts left: ${attemptsLeft}`;

    if (attemptsLeft <= 3) {
        attempts.classList.add('low-attempts');
    } else {
        attempts.classList.remove('low-attempts');
    }

    if (guessInput == randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
        message.classList.add('text-success');
        document.getElementById('guess-button').disabled = true;
        animateMessage('success');
    } else if (attemptsLeft === 0) {
        message.textContent = `Game Over! The correct number was: ${randomNumber}`;
        message.classList.add('text-danger');
        document.getElementById('guess-button').disabled = true;
        animateMessage('danger');
    } else {
        message.textContent = guessInput < randomNumber ? 'Try higher!' : 'Try lower!';
        message.classList.remove('text-success', 'text-danger');
        animateMessage('warning');
    }
});

function animateMessage(type) {
    const message = document.getElementById('message');
    message.classList.add('animated', `text-${type}`);
    setTimeout(() => {
        message.classList.remove('animated', `text-${type}`);
    }, 1000);
}
