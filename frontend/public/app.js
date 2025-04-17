
class FuneralManagementApp {
    constructor() {
        this.mainContent = document.getElementById('main-content');
        this.setupNavigation();
        this.loadDashboard();
        this.baseUrl = 'http://0.0.0.0:8000/api';
    }

    setupNavigation() {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.loadPage(page);
            });
        });
    }

    async fetchData(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    async loadPage(page) {
        switch(page) {
            case 'dashboard':
                await this.loadDashboard();
                break;
            case 'records':
                await this.loadMortuaryRecords();
                break;
            case 'schedule':
                await this.loadSchedule();
                break;
            case 'payments':
                await this.loadPayments();
                break;
            case 'cemetery':
                await this.loadCemetery();
                break;
            case 'drivers':
                await this.loadDrivers();
                break;
        }
    }

    async loadDashboard() {
        const records = await this.fetchData('mortuary/records');
        const schedule = await this.fetchData('scheduling/schedule');
        
        this.mainContent.innerHTML = `
            <h1>Dashboard</h1>
            <div class="dashboard-grid">
                <div class="card">
                    <h2>Recent Records</h2>
                    <div id="recent-records">
                        ${this.renderRecordsList(records)}
                    </div>
                </div>
                <div class="card">
                    <h2>Upcoming Schedule</h2>
                    <div id="upcoming-schedule">
                        ${this.renderScheduleList(schedule)}
                    </div>
                </div>
            </div>
        `;
    }

    renderRecordsList(records) {
        if (!records) return '<p>No records found</p>';
        return `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${records.map(record => `
                        <tr>
                            <td>${record.name}</td>
                            <td>${record.date}</td>
                            <td>${record.status}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    renderScheduleList(schedule) {
        if (!schedule) return '<p>No scheduled events</p>';
        return `
            <table>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    ${schedule.map(event => `
                        <tr>
                            <td>${event.title}</td>
                            <td>${event.date}</td>
                            <td>${event.location}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const app = new FuneralManagementApp();
});
