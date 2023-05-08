// modules/products/application/useGetProducts.ts

import { Some, useQuery } from ".";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useGetProducts = (getProducts: ProductRepository['getProducts'], page: number) => <Some>useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
});