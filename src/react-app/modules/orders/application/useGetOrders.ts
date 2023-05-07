// modules/orders/application/useGetOrders.ts

import { useQuery } from ".";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useGetOrders = (getOrders: OrderRepository['getOrders'], page: number) => <any>useQuery({
    queryKey: ['products', page],
    queryFn: () => getOrders(page),
    keepPreviousData: true,
});