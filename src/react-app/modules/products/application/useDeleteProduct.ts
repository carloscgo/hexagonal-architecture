// modules/products/application/useDeleteProduct.ts

import { useMutation } from ".";
import { ProductRepository } from "../domain/repositories/ProductRepository";
import { IdProduct } from "../domain/models/Product";

export const useDeleteProduct = (deleteProduct: ProductRepository['deleteProduct']) => <any>useMutation({
    mutationFn: (id: IdProduct) => deleteProduct(id),
})