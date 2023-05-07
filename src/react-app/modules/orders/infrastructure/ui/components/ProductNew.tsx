// modules/orders/infrastructure/ui/components/OrdersNew.tsx

import { useAddOrder } from '../../../application';
import { orderRepository } from '../../repositories/orderRepository';
import { httpAxios } from '../../instances/httpAxios';
import OrdersForm, { FormValues } from './OrderForm';
import useToast from '../../../../../app/hooks/useToast';
import { useTranslation } from '../../../../../app/utils/i18n';

const OrdersNew = () => {
    const { t } = useTranslation();

    const addOrder = orderRepository(httpAxios).addOrder;

    const addOrderAction = useAddOrder(addOrder);

    useToast(addOrderAction.status, t('creatingOrder'), t('successfullyCreated'), addOrderAction.error);

    const onSubmit = (data: FormValues, reset: () => void) => {
        addOrderAction.mutate(data);

        reset();
    }

    return (
        <OrdersForm title={t('createAnewOrder')} labelSubmit={t('createOrder')} onSubmit={onSubmit} />
    )
}

export default OrdersNew;