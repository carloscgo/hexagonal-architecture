// modules/products/application/useGetProductById.ts

import { Some, useQuery } from ".";
import { IdProduct } from "../domain/models/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useGetProductById = (getProductById: ProductRepository['getProductById'], id: IdProduct) => <Some>useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
});