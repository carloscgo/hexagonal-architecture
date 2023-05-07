import { Product } from '../models/Product';

export interface ProductRepository {
    getProducts: (page: number) => Promise<Product[]>;
    getProductById: (id: number) => Promise<Product>;
    addProduct: (product: Omit<Product, 'id'>) => Promise<Product>;
    editProduct: (id: Pick<Product, 'id'>, product: Omit<Product, 'id'>) => Promise<Product>;
    deleteProduct: (id: Pick<Product, 'id'>) => Promise<any>;
}
