// modules/orders/domain/services/OrderService.ts

import { IdOrder, Order } from '../models/Order';
import { OrderRepository } from '../repositories/OrderRepository';

export const orderService = (repository: OrderRepository): OrderRepository => ({
    getOrders: (page: number) => {
        return repository.getOrders(page);
    },
    getProductSearch: (q: string) => {
        return repository.getProductSearch(q);
    },
    getOrderById: (id: IdOrder) => {
        return repository.getOrderById(id);
    },
    addOrder: (order: Omit<Order, 'id'>) => {
        return repository.addOrder(order);
    },
    editOrder: (id: IdOrder, order: Omit<Order, 'id'>) => {
        return repository.editOrder(id, order);
    },
    deleteOrder: (id: IdOrder, refetch: () => void) => {
        return repository.deleteOrder(id, refetch);
    },
});
