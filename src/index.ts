import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import paymentRequest from './routes/paymentRequest.js';
import invoice from './routes/invoice.js';
import balance from './routes/balance.js';
import transcation from './routes/transaction.js';
import customer from './routes/customer.js';
import refund from './routes/refund.js';
import payout from './routes/payout.js';
import paymentMethod from './routes/paymentMethod.js';

const app = new Hono();

app.get('/', (c) => {
    return c.text('Hello Hono!');
});

app.route('/payment_requests', paymentRequest);
app.route('/payment_methods', paymentMethod)
app.route('/invoices', invoice);
app.route('/balance', balance);
app.route('/transactions', transcation);
app.route('/customers', customer);
app.route('/refunds', refund);
app.route('/payouts', payout)

serve({  
    fetch: app.fetch,
    port: 3000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});

