// modules/orders/application/useSearchProduct.ts

import { Some, useQuery } from ".";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useSearchProduct = (searchProduct: OrderRepository['getProductSearch'], q: string) => <Some>useQuery({
    queryKey: ['seaarch', q],
    queryFn: () => searchProduct(q),
    enabled: !!q,
});