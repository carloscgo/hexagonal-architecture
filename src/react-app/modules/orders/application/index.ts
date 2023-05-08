// modules/orders/application/index.ts

export {
    useMutation,
    useQuery,
    useQueryClient,
    QueryClient,
} from "@tanstack/react-query";
export { useGetOrders } from './useGetOrders'
export { useGetOrderById } from './useGetOrderById'
export { useAddOrder } from './useAddOrder'
export { useEditOrder } from './useEditOrder'
export { useDeleteOrder } from './useDeleteOrder'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Some = any;