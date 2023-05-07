// modules/products/domain/services/ProductService.ts

import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export const productService = (repository: ProductRepository): ProductRepository => ({
    getProducts: (page: number) => {
        return repository.getProducts(page);
    },
    getProductById: (id: number) => {
        return repository.getProductById(id);
    },
    addProduct: (product: Omit<Product, 'id'>) => {
        return repository.addProduct(product);
    },
    editProduct: (id: Pick<Product, 'id'>, product: Omit<Product, 'id'>) => {
        return repository.editProduct(id, product);
    },
    deleteProduct: (id: Pick<Product, 'id'>) => {
        return repository.deleteProduct(id);
    },
});
