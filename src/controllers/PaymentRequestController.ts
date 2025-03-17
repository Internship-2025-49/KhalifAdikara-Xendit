import { PaymentRequest as PaymentRequestClient } from 'xendit-node';
import type { Context } from 'hono';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.XENDIT_API_KEY || '';

const xenditPaymentRequestClient = new PaymentRequestClient({secretKey: API_KEY})

export async function createPaymentRequest(c: Context) {
    try {
        const paymentRequestData = await c.req.json();
        const paymentRequest = await xenditPaymentRequestClient.createPaymentRequest(
        {
            data: paymentRequestData,
        },
    );
    return c.json(paymentRequest, 201);
    } catch (error) {
        console.error('Error creating payment request:', error);
        return c.json({error}, 400)
    }
}

export async function getPaymentRequestByID(c: Context){
    try {
        const id = (c.req.param("id"));
        const paymentRequest = await xenditPaymentRequestClient.getPaymentRequestByID({
            paymentRequestId: id
        });
        return c.json(paymentRequest, 200);
    } catch (error) {
        console.error('Error getting payment request by id:', error);
        return c.json({error}, 400)
    }
}

export async function getPaymentRequestCaptures(c: Context) {
    try {
        const id = (c.req.param("id"));
        const paymentRequest = await xenditPaymentRequestClient.getPaymentRequestCaptures({
            paymentRequestId: id
        });
        return c.json(paymentRequest, 200);
    } catch (error) {
        console.error('Error getting payment request captures:', error);
        return c.json({error}, 400)
    }
}

export async function getAllPaymentRequest(c: Context) {
    try {
        const paymentRequest = await xenditPaymentRequestClient.getAllPaymentRequests();
        return c.json(paymentRequest, 200);
    } catch (error) {
        console.error('Error getting payment requests:', error);
        return c.json({error}, 400)
    }
}

export async function capturePaymentRequest(c: Context) {
    try {
        const id = (c.req.param("id"));
        const paymentRequestData = await c.req.json();
        const paymentRequest = await xenditPaymentRequestClient.capturePaymentRequest({
            paymentRequestId: id,
            data : paymentRequestData
        });
        return c.json(paymentRequest, 200);
    } catch (error) {
        console.error('Error capturing payment request:', error);
        return c.json({error}, 400)
    }       
}

export async function authorizePaymentRequest(c: Context) {
    try {
        const id = (c.req.param("id"));
        const paymentRequestData = await c.req.json();
        const paymentRequest = await xenditPaymentRequestClient.authorizePaymentRequest({
            paymentRequestId: id,
            data : paymentRequestData
        });
        return c.json(paymentRequest, 200);
    } catch (error) {
        console.error('Error authorizing payment request:', error);
        return c.json({error}, 400)
    }
}

export async function resendPaymentRequestAuth(c: Context) {
    try {
        const id = (c.req.param("id"));
        const paymentRequest = await xenditPaymentRequestClient.resendPaymentRequestAuth({
            paymentRequestId: id
        });
        return c.json(paymentRequest, 200);
    } catch (error) {
        console.error('Error resending payment request auth:', error);
        return c.json({error}, 400)
    }
}

export async function simulatePaymentRequestPayment(c: Context) {
    try {
        const id = c.req.param("id");
        const paymentRequest = await xenditPaymentRequestClient.simulatePaymentRequestPayment({
            paymentRequestId: id
        });
        return c.json(paymentRequest, 200);
    } catch (error) {
        console.error('Error simulating payment request payment:', error);
        return c.json({error}, 400)
    }
}