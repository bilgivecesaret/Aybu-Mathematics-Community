document.addEventListener('DOMContentLoaded', () => {
    // Handle new topic button and form
    const newTopicBtn = document.getElementById('new-topic-btn');
    const newTopicForm = document.querySelector('.new-topic-form');
    
    if (newTopicBtn && newTopicForm) {
        newTopicBtn.addEventListener('click', () => {
            newTopicForm.style.display = newTopicForm.style.display === 'none' ? 'block' : 'none';
        });

        // Handle new topic submission
        newTopicForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const topicTitle = newTopicForm.querySelector('input').value.trim();
            
            if (topicTitle) {
                addNewThread(topicTitle);
                newTopicForm.reset();
                newTopicForm.style.display = 'none';
            }
        });
    }

    // Add click handlers for thread titles
    const threadTitles = document.querySelectorAll('.thread h3');
    if (threadTitles.length > 0) {
        threadTitles.forEach(title => {
            title.addEventListener('click', () => {
                const thread = title.parentElement;
                const comments = thread.querySelector('.comments');
                const commentForm = thread.querySelector('.comment-form');
                
                // Toggle both comments and form visibility
                if (comments && commentForm) {
                    comments.classList.toggle('visible');
                    commentForm.classList.toggle('visible');
                }
            });
        });
    }

    // Existing comment submission functionality
    const forms = document.querySelectorAll('.comment-form');
    
    if (forms.length > 0) {
        forms.forEach(form => {
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    const username = form.querySelector('input').value.trim();
                    const commentText = form.querySelector('textarea').value.trim();
                    
                    if (username && commentText) {
                        addComment(form, username, commentText);
                        form.reset();
                    }
                });
            }
        });
    }
});

function addNewThread(title) {
    const threadsContainer = document.querySelector('.threads-container');
    
    const newThread = document.createElement('div');
    newThread.className = 'thread';
    
    newThread.innerHTML = `
        <h3>${title}</h3>
        <div class="comments"></div>
        <form class="comment-form">
            <input type="text" placeholder="Your name" required>
            <textarea placeholder="Your comment" required></textarea>
            <button type="submit">Add Comment</button>
        </form>
    `;
    
    threadsContainer.prepend(newThread);
    
    // Add click handler for the new thread title
    const newTitle = newThread.querySelector('h3');
    if (newTitle) {
        newTitle.addEventListener('click', () => {
            const comments = newThread.querySelector('.comments');
            const commentForm = newThread.querySelector('.comment-form');
            if (comments && commentForm) {
                comments.classList.toggle('visible');
                commentForm.classList.toggle('visible');
            }
        });
    }

    // Add submit handler for the new comment form
    const newForm = newThread.querySelector('.comment-form');
    if (newForm) {
        newForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = newForm.querySelector('input');
            const commentTextArea = newForm.querySelector('textarea');
            
            if (usernameInput && commentTextArea) {
                const username = usernameInput.value.trim();
                const commentText = commentTextArea.value.trim();
                
                if (username && commentText) {
                    addComment(newForm, username, commentText);
                    newForm.reset();
                }
            }
        });
    }
}

function addComment(form, username, commentText) {
    const commentsContainer = form.previousElementSibling;
    const timestamp = new Date().toLocaleString();
    
    // Ensure comments container is visible
    if (!commentsContainer.classList.contains('visible')) {
        commentsContainer.classList.add('visible');
    }

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    
    commentDiv.innerHTML = `
        <span class="username">${username}</span>
        <span class="timestamp">[${timestamp}]</span>
        <p>${commentText}</p>
    `;
    
    commentsContainer.appendChild(commentDiv);

}
