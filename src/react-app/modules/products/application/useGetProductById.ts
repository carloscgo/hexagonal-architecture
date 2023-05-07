// modules/products/application/useGetProductById.ts

import { useQuery } from ".";
import { IdProduct } from "../domain/models/Product";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useGetProductById = (getProductById: ProductRepository['getProductById'], id: IdProduct) => <any>useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
});