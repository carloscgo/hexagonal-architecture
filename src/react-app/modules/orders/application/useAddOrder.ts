// modules/orders/application/useAddOrder.ts

import { useMutation } from ".";
import { Order } from "../domain/models/Order";
import { OrderRepository } from "../domain/repositories/OrderRepository";

export const useAddOrder = (addOrder: OrderRepository['addOrder']) => <any>useMutation({
    mutationFn: (product: Omit<Order, 'id'>) => addOrder(product),
})