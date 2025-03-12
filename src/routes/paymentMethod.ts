import { Hono } from 'hono';
import * as paymentMethod from '../controllers/PaymentMethodController.js';

const app = new Hono();

app.post('/', (c) => paymentMethod.createPaymentMethod(c));

app.get('/:id', (c) => paymentMethod.getPaymentMethodByID(c))

app.get('/:id/payments', (c) => paymentMethod.getPaymentsByPaymentMethodId(c))

app.patch('/:id', (c) => paymentMethod.patchPaymentMethod(c))

app.get('/', (c) => paymentMethod.getAllPaymentMethods(c))

app.post('/:id/expire', (c) => paymentMethod.expirePaymentMethod(c))

export default app;