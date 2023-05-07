// src/infrastructure/repositories/productRepository.ts

import { IdOrder, Order } from '../../domain/models/Order';
import { OrderRepository } from '../../domain/repositories/OrderRepository';
import { Http } from '../../domain/repositories/Http';
import { LIMIT } from '../../../../app/components/Pagination';

const PATH = '/products'

export const productRepository = (client: Http): OrderRepository => ({
    getOrders: async (page: number) => client.get<Order[]>(PATH, {
        _limit: LIMIT,
        _page: page
    }),

    getOrderById: async (id: IdOrder) => client.get<Order>(`${PATH}/${id}`),

    addOrder: async (product: Omit<Order, 'id'>) => client.post<Order>(PATH, product),

    editOrder: async (id: IdOrder, product: Omit<Order, 'id'>) => client.put<Order>(`${PATH}/${id}`, product),

    deleteOrder: async (id: IdOrder, refetch: () => void) => {
        client.delete<any>(`${PATH}/${id}`).then(() => {
            refetch();
        })
    }
});
