// API endpoints
const API = {
    MORTUARY: '/api/mortuary/records/',
    SCHEDULE: '/api/scheduling/schedule/',
    PAYMENTS: '/api/payments/'
};

class FuneralApp {
    constructor() {
        this.initializeApp();
    }

    async initializeApp() {
        this.setupNavigation();
        await this.loadDashboard();
    }

    setupNavigation() {
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                await this.loadPage(e.target.dataset.page);
            });
        });
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    async loadPage(page) {
        const contentDiv = document.getElementById('main-content');
        const data = await this.fetchData(API[page.toUpperCase()] || '/api/dashboard');

        contentDiv.innerHTML = `
            <h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1>
            <div class="data-grid">
                ${this.renderData(data, page)}
            </div>
        `;
    }

    renderData(data, type) {
        return data.map(item => `
            <div class="card">
                <h3>${item.name || item.title || `Record #${item.id}`}</h3>
                <p>${item.description || item.status || item.date}</p>
                <button onclick="app.viewDetails('${type}', ${item.id})">View</button>
            </div>
        `).join('');
    }

    async viewDetails(type, id) {
        const data = await this.fetchData(`${API[type.toUpperCase()]}${id}`);
        alert(JSON.stringify(data, null, 2));
    }
}

const app = new FuneralApp();