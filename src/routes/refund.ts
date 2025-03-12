import { Hono } from 'hono';
import * as refund from '../controllers/RefundController.js';

const app = new Hono();

app.post('/', (c) => refund.createRefund(c));

app.get('/:id', (c) => refund.getRefund(c));

app.get('/', (c) => refund.getAllRefunds(c));

app.post('/:id/cancel', (c) => refund.cancelRefund(c));

export default app;