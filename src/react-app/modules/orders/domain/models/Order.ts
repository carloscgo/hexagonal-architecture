// modules/orders/domain/models/Order.ts

export type IdOrder = string | number;

export type Order = {
    id: IdOrder;
    name: string;
    reference: string;
    description: string;
    price: string | number;
    tax: string | number;
    [key: string]: any;
};
