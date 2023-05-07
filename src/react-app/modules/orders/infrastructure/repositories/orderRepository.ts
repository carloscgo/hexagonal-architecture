// src/infrastructure/repositories/orderRepository.ts

import { IdOrder, Order } from '../../domain/models/Order';
import { OrderRepository } from '../../domain/repositories/OrderRepository';
import { Http } from '../../domain/repositories/Http';
import { LIMIT } from '../../../../app/utils/constants';

const PATH = '/orders'

export const orderRepository = (client: Http): OrderRepository => ({
    getOrders: async (page: number) => client.get<Order[]>(PATH, {
        _limit: LIMIT,
        _page: page
    }),

    getOrderById: async (id: IdOrder) => client.get<Order>(`${PATH}/${id}`),

    addOrder: async (order: Omit<Order, 'id'>) => client.post<Order>(PATH, order),

    editOrder: async (id: IdOrder, order: Omit<Order, 'id'>) => client.put<Order>(`${PATH}/${id}`, order),

    deleteOrder: async (id: IdOrder, refetch: () => void) => {
        client.delete<any>(`${PATH}/${id}`).then(() => {
            refetch();
        })
    }
});
