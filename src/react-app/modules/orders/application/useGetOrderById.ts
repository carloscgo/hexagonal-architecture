// modules/orders/application/useGetOrderById.ts

import { Some, useQuery } from ".";
import { IdOrder } from "../domain/models/Order";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useGetOrderById = (getOrderById: OrderRepository['getOrderById'], id: IdOrder) => <Some>useQuery({
    queryKey: ['order', id],
    queryFn: () => getOrderById(id),
    enabled: !!id,
});