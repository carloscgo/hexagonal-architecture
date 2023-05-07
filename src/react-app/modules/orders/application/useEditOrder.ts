// modules/orders/application/useEditOrder.ts

import { useMutation } from ".";
import { IdOrder, Order } from "../domain/models/Order";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useEditOrder = (editOrder: OrderRepository['editOrder']) => <any>useMutation({
    mutationFn: ({ id, product }: { id: IdOrder, product: Omit<Order, 'id'> }) => editOrder(id, product),
})