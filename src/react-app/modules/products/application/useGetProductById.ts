// modules/products/application/useGetProductById.ts

import { useQuery } from ".";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useGetProductById = (getProductById: ProductRepository['getProductById'], id: number) => <any>useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
});