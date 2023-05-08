// modules/products/application/useEditProduct.ts

import { Some, useMutation } from ".";
import { IdProduct, Product } from "../domain/models/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useEditProduct = (editProduct: ProductRepository['editProduct']) => <Some>useMutation({
    mutationFn: ({ id, product }: { id: IdProduct, product: Omit<Product, 'id'> }) => editProduct(id, product),
})