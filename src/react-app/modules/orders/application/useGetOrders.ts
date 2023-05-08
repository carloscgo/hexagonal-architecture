// modules/orders/application/useGetOrders.ts

import { Some, useQuery } from ".";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useGetOrders = (getOrders: OrderRepository['getOrders'], page: number) => <Some>useQuery({
    queryKey: ['orders', page],
    queryFn: () => getOrders(page),
    keepPreviousData: true,
});