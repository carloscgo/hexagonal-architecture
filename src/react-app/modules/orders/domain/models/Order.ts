// modules/orders/domain/models/Order.ts

export type IdOrder = string | number;

export type IdProduct = string | number;

export type IProduct = {
    id: IdProduct;
    name: string;
    reference: string;
    price: string | number;
    tax: string | number;
    quantity: number;
}

export type Order = {
    id: IdOrder;
    total: string | number;
    taxes: string | number;
    products: IProduct[];
    [key: string]: any;
};
