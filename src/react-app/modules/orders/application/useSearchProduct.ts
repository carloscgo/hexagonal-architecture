// modules/orders/application/useSearchProduct.ts

import { useQuery } from ".";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useSearchProduct = (searchProduct: OrderRepository['getProductSearch'], q: string) => <any>useQuery({
    queryKey: ['seaarch', q],
    queryFn: () => searchProduct(q),
    enabled: !!q,
});