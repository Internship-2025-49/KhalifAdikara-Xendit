import { Hono } from 'hono';
import * as balance from '../controllers/BalanceController.js';

const app = new Hono();

app.get('/', (c) => balance.getBalance(c));

export default app;