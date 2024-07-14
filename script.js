document.getElementById('storyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    if (title && author && content) {
        const storyList = document.getElementById('storyList');
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story');

        const storyTitle = document.createElement('h3');
        storyTitle.textContent = title;
        storyDiv.appendChild(storyTitle);

        const storyAuthor = document.createElement('p');
        storyAuthor.textContent = `Author: ${author}`;
        storyDiv.appendChild(storyAuthor);

        const storyContent = document.createElement('p');
        storyContent.textContent = content;
        storyDiv.appendChild(storyContent);

        storyList.appendChild(storyDiv);

        document.getElementById('storyForm').reset();
    }
});

document.getElementById('adminButton').addEventListener('click', function() {
    document.getElementById('adminPanel').classList.remove('hidden');
    loadStoriesForAdmin();
});

document.getElementById('closeAdminPanel').addEventListener('click', function() {
    document.getElementById('adminPanel').classList.add('hidden');
});

function loadStoriesForAdmin() {
    const adminStoryList = document.getElementById('adminStoryList');
    adminStoryList.innerHTML = '';

    const stories = document.querySelectorAll('.story');
    stories.forEach((story, index) => {
        const storyClone = story.cloneNode(true);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            story.remove();
            loadStoriesForAdmin();
        });
        storyClone.appendChild(deleteButton);
        adminStoryList.appendChild(storyClone);
    });
}
