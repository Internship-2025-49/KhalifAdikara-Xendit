import type { Context } from 'hono';
import { Payout as PayoutClient } from 'xendit-node';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.XENDIT_API_KEY || '';

const xenditPayoutClient = new PayoutClient({secretKey: API_KEY})

export async function createPayout(c: Context) {
    try {
        const payoutData = await c.req.json();
        const payout = await xenditPayoutClient.createPayout(
            payoutData
        );
    return c.json(payout, 201);
    } catch (error) {
        console.error('Error creating payout:', error);
        return c.json({error}, 400)
    }
}

export async function getPayoutById(c: Context) {
    try {
        const id = (c.req.param("id"));
        const payout = await xenditPayoutClient.getPayoutById({
            id: id
        });
        return c.json(payout, 200);
    } catch (error) {
        console.error('Error getting payout by id:', error);
        return c.json({error}, 400)
    }   
}

export async function getPayoutChannels(c: Context) {
    try {
        const payout = await xenditPayoutClient.getPayoutChannels();
        return c.json(payout, 200);
    } catch (error) {
        console.error('Error getting payout channels:', error);
        return c.json({error}, 400)
    }
}

export async function getPayouts(c: Context) {
    try {
        const id = (c.req.param("id"));
        const payouts = await xenditPayoutClient.getPayouts({
            referenceId: id,
        });
        return c.json(payouts, 200);
    } catch (error) {
        console.error('Error getting payouts:', error);
        return c.json({error}, 400)
    }   
}

export async function cancelPayout(c: Context) {
    try {
        const id = (c.req.param("id"));
        const payout = await xenditPayoutClient.cancelPayout({
            id: id
        });
        return c.json(payout, 200);
    } catch (error) {
        console.error('Error canceling payout:', error);
        return c.json({error}, 400)
    }
    
}