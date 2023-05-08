// modules/products/application/index.ts

export {
    useMutation,
    useQuery,
    useQueryClient,
    QueryClient,
} from "@tanstack/react-query";
export { useGetProducts } from './useGetProducts'
export { useGetProductById } from './useGetProductById'
export { useAddProduct } from './useAddProduct'
export { useEditProduct } from './useEditProduct'
export { useDeleteProduct } from './useDeleteProduct'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Some = any;