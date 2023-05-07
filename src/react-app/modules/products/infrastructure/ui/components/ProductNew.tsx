// modules/products/infrastructure/ui/components/ProductsNew.tsx

import { useAddProduct } from '../../../application';
import { productRepository } from '../../repositories/productRepository';
import { httpAxios } from '../../instances/httpAxios';
import ProductsForm from './ProductForm';
import useToast from '../../../../../app/hooks/useToast';

type FormValues = {
    title: string;
    reference: string;
    description: string;
    price: number;
    tax: number;
}

const ProductsNew = () => {
    const addProduct = productRepository(httpAxios).addProduct;

    const addProductAction = useAddProduct(addProduct);

    useToast(addProductAction.status, addProductAction.error);

    const onSubmit = async (data: FormValues, reset: Function) => {
        try {
            addProductAction.mutate(data);

            reset();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ProductsForm onSubmit={onSubmit} />
    )
}

export default ProductsNew;