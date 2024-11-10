// script.js

// Simple hover effect on project cards
const projectCards = document.querySelectorAll('.project');

projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')  # This route handles the main page
def index():
    return render_template('index.html')  # Replace with your main HTML file name

@app.route('/rock-paper-scissors')  # This route handles the "View Project" click
def rock_paper_scissors():
    # Import your rock.py module and call the game logic function (adjust based on your script)
    from rock import play_game
    result = play_game()  # This should return the game output (text, etc.)
    return render_template('rock_paper_scissors_output.html', result=result)  # Pass result to template

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode