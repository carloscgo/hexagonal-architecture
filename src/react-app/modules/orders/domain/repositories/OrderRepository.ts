import { IdOrder, Order } from '../models/Order';

export interface OrderRepository {
    getOrders: (page: number) => Promise<Order[]>;
    getOrderById: (id: IdOrder) => Promise<Order>;
    addOrder: (product: Omit<Order, 'id'>) => Promise<Order>;
    editOrder: (id: IdOrder, product: Omit<Order, 'id'>) => Promise<Order>;
    deleteOrder: (id: IdOrder, refetch: () => void) => Promise<any>;
}
