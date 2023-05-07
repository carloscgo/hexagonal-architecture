// modules/products/domain/services/ProductService.ts

import { IdProduct, Product } from '../models/Product';
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
    editProduct: (id: IdProduct, product: Omit<Product, 'id'>) => {
        return repository.editProduct(id, product);
    },
    deleteProduct: (id: IdProduct) => {
        return repository.deleteProduct(id);
    },
});
