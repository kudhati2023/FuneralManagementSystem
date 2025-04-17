
class FuneralManagementApp {
    constructor() {
        this.mainContent = document.getElementById('main-content');
        this.setupNavigation();
        this.loadDashboard();
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

    async loadPage(page) {
        switch(page) {
            case 'dashboard':
                await this.loadDashboard();
                break;
            case 'records':
                await this.loadRecords();
                break;
            case 'schedule':
                await this.loadSchedule();
                break;
            case 'payments':
                await this.loadPayments();
                break;
        }
    }

    async loadDashboard() {
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        this.mainContent.innerHTML = `
            <h1>Dashboard</h1>
            <div class="card">
                <h2>Recent Records</h2>
                <div id="recent-records"></div>
            </div>
        `;
    }

    async loadRecords() {
        const response = await fetch('/api/mortuary/records/');
        const records = await response.json();
        this.mainContent.innerHTML = `
            <h1>Records</h1>
            <div class="records-list">
                ${records.map(record => `
                    <div class="card">
                        <h3>${record.name}</h3>
                        <p>Date: ${record.date}</p>
                        <button class="btn" onclick="app.viewRecord(${record.id})">View</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    async loadSchedule() {
        const response = await fetch('/api/scheduling/schedule/');
        const schedule = await response.json();
        this.mainContent.innerHTML = `
            <h1>Schedule</h1>
            <div id="calendar"></div>
        `;
    }

    async loadPayments() {
        const response = await fetch('/api/payments/');
        const payments = await response.json();
        this.mainContent.innerHTML = `
            <h1>Payments</h1>
            <div class="payments-list">
                ${payments.map(payment => `
                    <div class="card">
                        <h3>Payment #${payment.id}</h3>
                        <p>Amount: $${payment.amount}</p>
                        <p>Status: ${payment.status}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

const app = new FuneralManagementApp();
