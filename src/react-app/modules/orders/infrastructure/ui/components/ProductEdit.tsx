// modules/orders/infrastructure/ui/components/OrdersNew.tsx

import { useParams } from 'react-router-dom';
import { useEditOrder, useGetOrderById } from '../../../application';
import { orderRepository } from '../../repositories/orderRepository';
import { httpAxios } from '../../instances/httpAxios';
import OrdersForm, { FormValues } from './OrderForm';
import useToast from '../../../../../app/hooks/useToast';
import { useTranslation } from '../../../../../app/utils/i18n';
import { IdOrder } from '../../../domain/models/Order';

const OrderEdit = () => {
    const { idOrder } = useParams();

    const { t } = useTranslation();

    const getOrderById = orderRepository(httpAxios).getOrderById;
    const editOrder = orderRepository(httpAxios).editOrder;

    const editOrderAction = useEditOrder(editOrder);
    const getOrderByIcAction = useGetOrderById(getOrderById, idOrder as IdOrder);

    useToast(editOrderAction.status, t('editingOrder'), t('successfullyUpdated'), editOrderAction.error);

    const onSubmit = (data: FormValues) => editOrderAction.mutate({ id: idOrder, product: data });

    return (
        <OrdersForm title={t('editOrder')} labelSubmit={t('editOrder')} values={getOrderByIcAction.data} onSubmit={onSubmit} />
    )
}

export default OrderEdit;