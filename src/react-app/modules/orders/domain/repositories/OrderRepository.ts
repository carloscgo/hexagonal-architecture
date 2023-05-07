import { IdOrder, Order } from '../models/Order';

export interface OrderRepository {
    getOrders: (page: number) => Promise<Order[]>;
    getOrderById: (id: IdOrder) => Promise<Order>;
    addOrder: (order: Omit<Order, 'id'>) => Promise<Order>;
    editOrder: (id: IdOrder, order: Omit<Order, 'id'>) => Promise<Order>;
    deleteOrder: (id: IdOrder, refetch: () => void) => Promise<any>;
}
