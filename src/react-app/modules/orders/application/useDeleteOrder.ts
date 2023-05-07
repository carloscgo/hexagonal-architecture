// modules/orders/application/useDeleteOrder.ts

import { useMutation } from ".";
import { OrderRepository } from "../domain/repositories/OrderRepository";
import { IdOrder } from "../domain/models/Order";

export const useDeleteOrder = (deleteOrder: OrderRepository['deleteOrder']) => <any>useMutation({
    mutationFn: ({ id, refetch }: { id: IdOrder, refetch: () => void }) => deleteOrder(id, refetch),
})