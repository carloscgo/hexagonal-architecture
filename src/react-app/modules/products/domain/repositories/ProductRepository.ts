import { Some } from '../../application';
import { IdProduct, Product } from '../models/Product';

export interface ProductRepository {
    getProducts: (page: number) => Promise<Product[]>;
    getProductById: (id: IdProduct) => Promise<Product>;
    addProduct: (product: Omit<Product, 'id'>) => Promise<Product>;
    editProduct: (id: IdProduct, product: Omit<Product, 'id'>) => Promise<Product>;
    deleteProduct: (id: IdProduct, refetch: () => void) => Promise<Some>;
}
