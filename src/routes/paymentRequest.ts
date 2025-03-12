import { Hono } from 'hono';
import * as paymentRequest from '../controllers/PaymentRequestController.js';

const app = new Hono();

app.post('/', (c) => paymentRequest.createPaymentRequest(c));

app.get('/:id', (c) => paymentRequest.getPaymentRequestByID(c))

app.get('/:id/captures', (c) => paymentRequest.getPaymentRequestCaptures(c))

app.get('/', (c) => paymentRequest.getAllPaymentRequest(c))

app.post('/:id/captures', (c) => paymentRequest.capturePaymentRequest(c))

app.post('/:id/auth', (c) => paymentRequest.authorizePaymentRequest(c))

app.post('/:id/auth/resend', (c) => paymentRequest.resendPaymentRequestAuth(c))

app.post('/:id/payments/simulate', (c) => paymentRequest.simulatePaymentRequestPayment(c))

export default app;