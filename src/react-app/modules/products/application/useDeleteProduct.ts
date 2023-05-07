// modules/products/application/useDeleteProduct.ts

import { useMutation } from ".";
import { ProductRepository } from "../domain/repositories/ProductRepository";
import { Product } from "../domain/models/Product";

export const useDeleteProduct = (deleteProduct: ProductRepository['deleteProduct']) => useMutation({
    mutationFn: (id: Pick<Product, 'id'>) => deleteProduct(id),
})