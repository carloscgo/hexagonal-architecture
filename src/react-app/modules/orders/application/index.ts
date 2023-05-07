// modules/orders/application/index.ts

export {
    useMutation,
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
export { useGetOrders } from './useGetOrders'
export { useGetOrderById } from './useGetOrderById'
export { useAddOrder } from './useAddOrder'
export { useEditOrder } from './useEditOrder'
export { useDeleteOrder } from './useDeleteOrder'
