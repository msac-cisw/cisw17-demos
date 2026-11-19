function createLessonItem(page) {
    const item = document.createElement('li');
    const heading = document.createElement('h2');
    const description = document.createElement('p');

    if (page.status === 'active' && page.filename) {
        const link = document.createElement('a');
        link.href = page.filename;
        link.textContent = page.title;
        heading.append(link);
    } else {
        heading.textContent = page.title;
    }

    description.textContent = page.description;
    if (page.status === 'coming-soon') {
        item.classList.add('coming-soon');
    }

    item.append(heading, description);
    return item;
}

async function loadPages() {
    const lessonList = document.getElementById('lesson-list');
    const status = document.getElementById('lesson-status');

    try {
        const response = await fetch('pages.json');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        lessonList.append(...data.pages.map(createLessonItem));
    } catch (error) {
        console.error('Error loading pages:', error);
        status.textContent = 'Could not load the course demos. Try reloading the page.';
    }
}

loadPages();
