import { IdProduct, Product } from '../models/Product';

export interface ProductRepository {
    getProducts: (page: number) => Promise<Product[]>;
    getProductById: (id: number) => Promise<Product>;
    addProduct: (product: Omit<Product, 'id'>) => Promise<Product>;
    editProduct: (id: IdProduct, product: Omit<Product, 'id'>) => Promise<Product>;
    deleteProduct: (id: IdProduct) => Promise<any>;
}
