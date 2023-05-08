// modules/products/application/useDeleteProduct.ts

import { Some, useMutation } from ".";
import { ProductRepository } from "../domain/repositories/ProductRepository";
import { IdProduct } from "../domain/models/Product";

export const useDeleteProduct = (deleteProduct: ProductRepository['deleteProduct']) => <Some>useMutation({
    mutationFn: ({ id, refetch }: { id: IdProduct, refetch: () => void }) => deleteProduct(id, refetch),
})