// modules/products/domain/models/Product.ts

export type IdProduct = string | number;

export type Product = {
    id: IdProduct;
    name: string;
    reference: string;
    description: string;
    price: string | number;
    tax: string | number;
    [key: string]: any;
};
