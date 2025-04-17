
class FuneralApp {
    constructor() {
        this.apiUrl = 'http://0.0.0.0:8000/api';
        this.init();
    }

    async init() {
        this.setupNavigation();
        await this.loadDashboard();
    }

    setupNavigation() {
        const nav = document.getElementById('main-nav');
        nav.innerHTML = `
            <button onclick="app.loadDashboard()">Dashboard</button>
            <button onclick="app.loadSchedule()">Schedule</button>
            <button onclick="app.loadPayments()">Payments</button>
        `;
    }

    async loadDashboard() {
        const dashboard = document.getElementById('dashboard');
        try {
            const response = await fetch(`${this.apiUrl}/dashboard/`);
            const data = await response.json();
            dashboard.innerHTML = this.renderDashboard(data);
        } catch (error) {
            dashboard.innerHTML = '<p>Error loading dashboard</p>';
        }
    }

    async loadSchedule() {
        const calendar = document.getElementById('calendar');
        try {
            const response = await fetch(`${this.apiUrl}/schedule/`);
            const data = await response.json();
            calendar.innerHTML = this.renderCalendar(data);
        } catch (error) {
            calendar.innerHTML = '<p>Error loading schedule</p>';
        }
    }

    async loadPayments() {
        const lists = document.getElementById('lists');
        try {
            const response = await fetch(`${this.apiUrl}/payments/`);
            const data = await response.json();
            lists.innerHTML = this.renderPaymentsList(data);
        } catch (error) {
            lists.innerHTML = '<p>Error loading payments</p>';
        }
    }

    renderDashboard(data) {
        return `
            <h2>Dashboard</h2>
            <div class="stats">
                <div>Total Orders: ${data.totalOrders || 0}</div>
                <div>Pending Payments: ${data.pendingPayments || 0}</div>
            </div>
        `;
    }

    renderCalendar(data) {
        return `
            <h2>Schedule</h2>
            <div class="calendar">
                ${data.events?.map(event => `
                    <div class="event">
                        <h3>${event.title}</h3>
                        <p>${event.date}</p>
                    </div>
                `).join('') || 'No events scheduled'}
            </div>
        `;
    }

    renderPaymentsList(data) {
        return `
            <h2>Payments</h2>
            <div class="payments-list">
                ${data.payments?.map(payment => `
                    <div class="payment">
                        <p>Amount: $${payment.amount}</p>
                        <p>Status: ${payment.status}</p>
                    </div>
                `).join('') || 'No payments found'}
            </div>
        `;
    }
}

const app = new FuneralApp();
