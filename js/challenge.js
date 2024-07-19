// Initialize variables
let counter = 0;
let isPaused = false;
let likes = {};
let intervalID;

// Start the counter
function startCounter() {
    intervalID = setInterval(() => {
        if (!isPaused) {
            counter++;
            document.getElementById('counter').innerText = counter;
        }
    }, 1000);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    startCounter();

    // Plus button
    document.getElementById('plus').addEventListener('click', () => {
        if (!isPaused) {
            counter++;
            document.getElementById('counter').innerText = counter;
        }
    });

    // Minus button
    document.getElementById('minus').addEventListener('click', () => {
        if (!isPaused) {
            counter--;
            document.getElementById('counter').innerText = counter;
        }
    });

    // Like button
    document.getElementById('heart').addEventListener('click', () => {
        if (!isPaused) {
            likes[counter] = (likes[counter] || 0) + 1;
            const likesList = document.querySelector('.likes');
            const existingLike = document.getElementById(`like-${counter}`);

            if (existingLike) {
                existingLike.innerText = `${counter} has been liked ${likes[counter]} times`;
            } else {
                const newLike = document.createElement('li');
                newLike.id = `like-${counter}`;
                newLike.innerText = `${counter} has been liked ${likes[counter]} times`;
                likesList.appendChild(newLike);
            }
        }
    });

    // Pause/Resume button
    document.getElementById('pause').addEventListener('click', () => {
        isPaused = !isPaused;

        document.getElementById('pause').innerText = isPaused ? 'resume' : 'pause';

        const buttons = ['plus', 'minus', 'heart', 'submit'];
        buttons.forEach(buttonId => {
            document.getElementById(buttonId).disabled = isPaused;
        });
    });

    // Comment form
    document.getElementById('comment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value;

        if (commentText) {
            const commentList = document.getElementById('list');
            const newComment = document.createElement('p');
            newComment.innerText = commentText;
            commentList.appendChild(newComment);

            commentInput.value = '';
        }
    });
});
