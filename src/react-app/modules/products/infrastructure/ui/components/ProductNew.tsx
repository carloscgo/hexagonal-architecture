// modules/products/infrastructure/ui/components/ProductsNew.tsx

import { useAddProduct } from '../../../application';
import { productRepository } from '../../repositories/productRepository';
import { httpAxios } from '../../instances/httpAxios';
import ProductsForm, { FormValues } from './ProductForm';
import useToast from '../../../../../app/hooks/useToast';
import { useTranslation } from '../../../../../app/utils/i18n';

const ProductsNew = () => {
    const { t } = useTranslation();

    const addProduct = productRepository(httpAxios).addProduct;

    const addProductAction = useAddProduct(addProduct);

    useToast(addProductAction.status, addProductAction.error);

    const onSubmit = (data: FormValues, reset: () => void) => {
        addProductAction.mutate(data);

        reset();
    }

    return (
        <ProductsForm title={t('createAnewProduct')} labelSubmit={t('createProduct')} onSubmit={onSubmit} />
    )
}

export default ProductsNew;