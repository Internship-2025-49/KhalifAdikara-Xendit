import { Customer as CustomerClient } from 'xendit-node';
import type { Context } from 'hono';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.XENDIT_API_KEY || '';

const xenditCustomerClient = new CustomerClient({secretKey: API_KEY})

export async function getCustomer(c: Context) {
    try {
        const id = c.req.param("id");
        const customer = await xenditCustomerClient.getCustomer({id: id});
        return c.json(customer, 200);
    } catch (error) {
        console.error('Error getting customer:', error);
        return c.json({error})
    }
}

export async function createCustomer(c: Context) {
    try {
        const customerData = await c.req.json();

        const customer = await xenditCustomerClient.createCustomer({
            data: customerData
        });

        return c.json(customer, 201);
    } catch (error) {
        console.error('Error creating customer:', error);
        return c.json({error})
    }
}

export async function getCustomerByReferenceID(c: Context) {
    try {
        const referenceId = c.req.param("referenceId");
        const customer = await xenditCustomerClient.getCustomerByReferenceID({
            referenceId: referenceId
        });
        return c.json(customer, 200);
    } catch (error) {
        console.error('Error getting customer by reference ID:', error);
        return c.json({error})
    }
}

export async function updateCustomer(c: Context) {
    try {
        const id = c.req.param("id");
        const customerData = await c.req.json();
        const customer = await xenditCustomerClient.updateCustomer({
            id: id,
            data: customerData
        });
        return c.json(customer, 200);
    } catch (error) {
        console.error('Error updating customer:', error);
        return c.json({error}, 400)
    }
}