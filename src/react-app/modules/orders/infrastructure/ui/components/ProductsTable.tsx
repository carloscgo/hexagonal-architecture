
// modules/orders/infrastructure/ui/components/OrdersTable.tsx

import { useState } from "react";
import Table from "../../../../../app/components/Table";
import Loading from "../../../../../app/components/Loading";
import useToast from "../../../../../app/hooks/useToast";
import Pagination, { LIMIT, TYPES } from "../../../../../app/components/Pagination";
import HeaderList from "../../../../../app/components/HeaderList";
import { formatAmount, useTranslation } from "../../../../../app/utils/i18n";
import { useDeleteOrder, useGetOrders } from "../../../application";
import { IdOrder } from "../../../domain/models/Order";
import { httpAxios } from "../../instances/httpAxios";
import { orderRepository } from "../../repositories/orderRepository";
import routes from "../utils/routes";

const OrdersTable = () => {
    const [page, setPage] = useState(1);

    const { t } = useTranslation();

    const getOrders = orderRepository(httpAxios).getOrders;
    const deleteOrder = orderRepository(httpAxios).deleteOrder;

    const getOrdersAction = useGetOrders(getOrders, page);
    const deleteOrderAction = useDeleteOrder(deleteOrder);

    useToast(deleteOrderAction.status, t('deletingOrder'), t('successfullyDeleted'), deleteOrderAction.error);

    const actionDelete = (id: IdOrder) => deleteOrderAction.mutate({ id, refetch: getOrdersAction.refetch });

    const onPage = (page: number, type: string) => {
        if (type === TYPES.next && getOrdersAction.data.length === LIMIT) {
            setPage(page);
        }

        if (type === TYPES.previous) {
            setPage(page);
        }
    }

    if (getOrdersAction.loading) return <Loading />

    return (
        <div className="w-full grid grid-cols-1 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <HeaderList
                    title={t('latestOrders')}
                    description={t('listLatestOrders')}
                    labelCreate={t('createOrder')}
                    routeNew={routes.new}
                />

                {getOrdersAction.data && (
                    <>
                        <Table
                            columns={[
                                {
                                    key: 'name',
                                    label: t('name')
                                },
                                {
                                    key: 'reference',
                                    label: t('reference')
                                },
                                {
                                    key: 'price',
                                    label: t('price')
                                },
                                {
                                    key: 'tax',
                                    label: t('tax')
                                },
                            ]}
                            values={getOrdersAction.data.map((item: any) => ({
                                ...item,
                                price: formatAmount(item.price),
                                tax: formatAmount(item.tax),
                            }))}
                            routesEdit={routes.edit}
                            keyId=":idOrder"
                            titleDelete={t('deleteOrder')}
                            messageDelete={t('messageDeleteOrder')}
                            actionDelete={actionDelete}
                        />

                        <Pagination current={page} length={getOrdersAction.data.length} onPage={onPage} />
                    </>
                )}
            </div>
        </div>
    )
}

export default OrdersTable;