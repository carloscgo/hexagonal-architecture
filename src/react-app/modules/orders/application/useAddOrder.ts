// modules/orders/application/useAddOrder.ts

import { Some, useMutation } from ".";
import { Order } from "../domain/models/Order";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useAddOrder = (addOrder: OrderRepository['addOrder']) => <Some>useMutation({
    mutationFn: (order: Omit<Order, 'id'>) => addOrder(order),
})