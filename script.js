async function loadPages() {
    try {
        const response = await fetch('pages.json');
        const data = await response.json();
        const pagesGrid = document.getElementById('pages-grid');

        data.pages.forEach(page => {
            const pageCard = document.createElement('div');
            pageCard.className = `page-card ${page.status === 'coming-soon' ? 'coming-soon' : ''}`;

            // Make entire card clickable for active pages
            if (page.status === 'active' && page.filename) {
                pageCard.style.cursor = 'pointer';
                pageCard.addEventListener('click', () => {
                    window.location.href = page.filename;
                });
            }

            const cardContent = `
                <div class="card-icon">${page.icon}</div>
                <div class="card-content">
                    <h3>${page.title}</h3>
                    <p>${page.description}</p>
                </div>
                ${page.status === 'active' && page.filename ?
                    `<span class="card-link">View Page</span>` :
                    `<span class="card-link disabled">${page.status === 'coming-soon' ? 'Coming Soon' : 'In Development'}</span>`
                }
            `;

            pageCard.innerHTML = cardContent;
            pagesGrid.appendChild(pageCard);
        });
    } catch (error) {
        console.error('Error loading pages:', error);
        // Fallback content
        document.getElementById('pages-grid').innerHTML = `
            <div class="page-card">
                <div class="card-icon">⚠️</div>
                <div class="card-content">
                    <h3>Error Loading Pages</h3>
                    <p>Could not load page configuration</p>
                </div>
            </div>
        `;
    }
}

// Load pages when DOM is ready
document.addEventListener('DOMContentLoaded', loadPages);