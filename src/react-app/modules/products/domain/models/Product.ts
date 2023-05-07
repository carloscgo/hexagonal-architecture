// modules/products/domain/models/Product.ts

export type Product = {
    id: string | number;
    name: string;
    reference: string;
    description: string;
    price: number;
    tax: number;
};
