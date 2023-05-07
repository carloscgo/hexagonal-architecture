// modules/products/infrastructure/ui/components/ProductsNew.tsx

import { useParams } from 'react-router-dom';
import { useEditProduct, useGetProductById } from '../../../application';
import { productRepository } from '../../repositories/productRepository';
import { httpAxios } from '../../instances/httpAxios';
import ProductsForm, { FormValues } from './ProductForm';
import useToast from '../../../../../app/hooks/useToast';
import { useTranslation } from '../../../../../app/utils/i18n';
import { IdProduct } from '../../../domain/models/Product';

const ProductEdit = () => {
    const { idProduct } = useParams();

    const { t } = useTranslation();

    const getProductById = productRepository(httpAxios).getProductById;
    const editProduct = productRepository(httpAxios).editProduct;

    const editProductAction = useEditProduct(editProduct);
    const getProductByIcAction = useGetProductById(getProductById, idProduct as IdProduct);

    useToast(editProductAction.status, t('editingProduct'), t('successfullyUpdated'), editProductAction.error);

    const onSubmit = (data: FormValues) => editProductAction.mutate({ id: idProduct, product: data });

    return (
        <ProductsForm title={t('editProduct')} labelSubmit={t('editProduct')} values={getProductByIcAction.data} onSubmit={onSubmit} />
    )
}

export default ProductEdit;