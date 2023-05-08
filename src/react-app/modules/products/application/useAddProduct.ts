// modules/products/application/useAddProduct.ts

import { Some, useMutation } from ".";
import { Product } from "../domain/models/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useAddProduct = (addProduct: ProductRepository['addProduct']) => <Some>useMutation({
    mutationFn: (product: Omit<Product, 'id'>) => addProduct(product),
})