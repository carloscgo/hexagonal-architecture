// src/infrastructure/repositories/productRepository.ts

import { Product } from '../../domain/models/Product';
import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { Http } from '../../domain/repositories/Http';

const PATH = '/products'

export const productRepository = (client: Http): ProductRepository => ({
    getProducts: async (page: number) => client.get<Product[]>(PATH, {
        _limit: 10,
        _page: page
    }),

    getProductById: async (id: number) => client.get<Product>(`${PATH}/${id}`),

    addProduct: async (product: Omit<Product, 'id'>) => client.post<Product>(PATH, product),

    editProduct: async (id: Pick<Product, 'id'>, product: Omit<Product, 'id'>) => client.put<Product>(`${PATH}/${id}`, product),

    deleteProduct: async (id: Pick<Product, 'id'>) => client.delete<any>(`${PATH}/${id}`)
});
