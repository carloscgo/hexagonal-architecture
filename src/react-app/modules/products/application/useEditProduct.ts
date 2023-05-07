// modules/products/application/useEditProduct.ts

import { useMutation } from ".";
import { IdProduct, Product } from "../domain/models/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useEditProduct = (editProduct: ProductRepository['editProduct']) => useMutation({
    mutationFn: ({ id, product }: { id: IdProduct, product: Omit<Product, 'id'> }) => editProduct(id, product),
})