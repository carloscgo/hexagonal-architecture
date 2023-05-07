// modules/products/application/useAddProduct.ts

import { useMutation } from ".";
import { Product } from "../domain/models/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useAddProduct = (addProduct: ProductRepository['addProduct']) => <any>useMutation({
    mutationFn: (product: Omit<Product, 'id'>) => addProduct(product),
})