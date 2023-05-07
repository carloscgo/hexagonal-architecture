// modules/orders/domain/services/OrderService.ts

import { IdOrder, Order } from '../models/Order';
import { OrderRepository } from '../repositories/OrderRepository';

export const productService = (repository: OrderRepository): OrderRepository => ({
    getOrders: (page: number) => {
        return repository.getOrders(page);
    },
    getOrderById: (id: IdOrder) => {
        return repository.getOrderById(id);
    },
    addOrder: (product: Omit<Order, 'id'>) => {
        return repository.addOrder(product);
    },
    editOrder: (id: IdOrder, product: Omit<Order, 'id'>) => {
        return repository.editOrder(id, product);
    },
    deleteOrder: (id: IdOrder, refetch: () => void) => {
        return repository.deleteOrder(id, refetch);
    },
});
