document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const commentInput = document.getElementById('comment');
    const submitButton = document.getElementById('submit');
    const commentsContainer = document.getElementById('comments-container');

    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            updateStars(selectedRating);
        });
    });

    submitButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (selectedRating > 0 && commentText !== "") {
            addComment(selectedRating, commentText);
            commentInput.value = "";
            updateStars(0);
        } else {
            alert('Please select a rating and enter a comment.');
        }
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    function addComment(rating, comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p><strong>Rating:</strong> ${rating} stars</p>
            <p>${comment}</p>
        `;
        commentsContainer.appendChild(commentElement);
    }
});
