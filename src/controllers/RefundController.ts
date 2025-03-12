import { Refund as RefundClient } from 'xendit-node';
import type { Context } from 'hono';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.XENDIT_API_KEY || '';

const xenditRefundClient = new RefundClient({secretKey: API_KEY})

export async function createRefund(c: Context) {
    try {
        const refundData = await c.req.json();
        const refund = await xenditRefundClient.createRefund(
        {
            data: refundData,
        },
    );
    return c.json(refund, 201);
    } catch (error) {
        console.error('Error creating refund:', error);
    }
}

export async function getRefund(c: Context) {
    try {
        const id = (c.req.param("id"));
        const refund = await xenditRefundClient.getRefund({
            refundID: id
        });
        return c.json(refund, 200);
    } catch (error) {
        console.error('Error getting refund by id:', error);
    }
}

export async function getAllRefunds(c: Context) {
    try {
        const refunds = await xenditRefundClient.getAllRefunds();
        return c.json(refunds, 200);
    } catch (error) {
        console.error('Error getting all refunds:', error);
    }
}

export async function cancelRefund(c: Context) {
    try {
        const id = (c.req.param("id"));
        const refund = await xenditRefundClient.cancelRefund({
            refundID: id
        });
        return c.json(refund, 200);
    } catch (error) {
        console.error('Error canceling refund:', error);
    }
}