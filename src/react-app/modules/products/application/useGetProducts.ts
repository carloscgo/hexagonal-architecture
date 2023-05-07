// modules/products/application/useGetProducts.ts

import { useQuery } from ".";
import { ProductRepository } from "../domain/repositories/ProductRepository";

export const useGetProducts = (getProducts: ProductRepository['getProducts'], page: number) => useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
});