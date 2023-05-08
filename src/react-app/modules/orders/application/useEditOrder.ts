// modules/orders/application/useEditOrder.ts

import { Some, useMutation } from ".";
import { IdOrder, Order } from "../domain/models/Order";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useEditOrder = (editOrder: OrderRepository['editOrder']) => <Some>useMutation({
    mutationFn: ({ id, order }: { id: IdOrder, order: Omit<Order, 'id'> }) => editOrder(id, order),
})