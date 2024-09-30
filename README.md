Guess the Number Game
This project is a simple web-based number-guessing game where users try to guess a randomly generated number between 1 and 100. The game provides feedback on the guess and keeps track of remaining attempts.

Features
User-friendly interface styled with Bootstrap.
Feedback on each guess (too high, too low, or correct).
Tracks the number of attempts remaining.
Automatically resets when the game ends.
Includes Docker for containerized deployment.
CI/CD pipeline set up with GitHub Actions for easy deployment.

.
├── .github/workflows/     # CI/CD configuration for GitHub Actions
│   └── deploy.yml         # Workflow for deployment
├── .gitignore             # Files and folders to be ignored by Git
├── Dockerfile             # Docker image configuration
├── app.js                 # JavaScript file containing the game logic
├── index.html             # Main HTML file (UI)
├── style.css              # Optional custom styling for the game

Technologies Used
Frontend: HTML, Bootstrap 4.5, JavaScript
Backend (Containerization): Docker
CI/CD: GitHub Actions for automated deployment
How to Play
Open the game in a web browser.
Guess a number between 1 and 100.
Receive feedback on whether your guess is too high, too low, or correct.
You have 10 attempts to guess the correct number.
Docker Setup
To run the application using Docker, follow these steps:

Build the Docker image:
docker build -t guess-the-number-game .
Run the Docker container:
docker run -d -p 8080:80 guess-the-number-game
The game will now be accessible at http://localhost:8080.

Dockerfile 
The Dockerfile is used to package the application into a lightweight container for easy deployment. It uses an NGINX web server to serve the static files (index.html, app.js, and style.css).
