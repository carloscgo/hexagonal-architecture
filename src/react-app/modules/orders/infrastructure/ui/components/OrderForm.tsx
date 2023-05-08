// modules/orders/infrastructure/ui/components/Orders.tsx

import { type FieldValues, useForm, useFieldArray } from 'react-hook-form';

import FootButtons from '../../../../../app/components/FootButtons';
import { useTranslation } from '../../../../../app/utils/i18n';
import routes, { Link } from "../utils/routes";
import { useMemo } from 'react';
import { Order } from '../../../domain/models/Order';
import { RiAddCircleFill, RiDeleteBin2Fill } from 'react-icons/ri';
import Search from '../../../../../app/components/Search';

export interface FormValues extends FieldValues {
    title: string;
    reference: string;
    description: string;
    price: number;
    tax: number;
}

type PropsOrdersForm = {
    title: string;
    labelSubmit: string;
    values?: Order;
    onSubmit: (
        data: FormValues,
        reset: () => void
    ) => void;
};

const OrderForm = ({ title, labelSubmit, values, onSubmit }: PropsOrdersForm) => {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { isValid, isSubmitting },
        setValue,
        getValues,
        setFocus,
        reset,
        control,
    } = useForm<FormValues>({
        mode: "all",
        reValidateMode: "onChange",
        defaultValues: {
            products: [{
                productId: '',
                price: '',
                tax: '',
                quantity: 0,
                total: 0,
            }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "products",
    });

    const addField = () => {
        append({
            productId: '',
            price: '',
            tax: '',
            quantity: 0,
            total: 0,
        });
    }

    const updateTotalProduct = (index: number, quantity: number) => {
        setValue(`products[${index}].quantity`, quantity);

        const price = getValues(`products[${index}].price`);
        const tax = getValues(`products[${index}].tax`);

        setValue(`products[${index}].total`, ((price + tax) * quantity) as number);
    }

    const columns = useMemo(() => [{
        key: 'productId',
        label: t('product'),
        width: 'w-[auto]',
        field: (index: number) => (
            <Search id={`productInput${index}`} onSelect={(product) => {
                if (product) {
                    setValue(`products[${index}].productId`, product.id);
                    setValue(`products[${index}].price`, product.price as number);
                    setValue(`products[${index}].tax`, product.tax as number);

                    const quantity = getValues(`products[${index}].quantity`) as number;

                    updateTotalProduct(index, quantity);
                }
            }} />)
    }, {
        key: 'price',
        label: t('price'),
        width: 'w-[200px]',
        field: (index: number, field: any) => (
            <input
                placeholder={t('price') as string}
                readOnly
                {...register(`products[${index}].price`, { required: true })}
                type="number"
                defaultValue={field.price}
                className="w-full mt-1 mb-1 p-2 dark:bg-gray-300 block rounded-md border-blue-300 border-[1px] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />)
    }, {
        key: 'tax',
        label: t('tax'),
        width: 'w-[200px]',
        field: (index: number, field: any) => (
            <input
                placeholder={t('tax') as string}
                readOnly
                {...register(`products[${index}].tax`, { required: true })}
                type="number"
                defaultValue={field.tax}
                className="w-full mt-1 mb-1 p-2 dark:bg-gray-300 block rounded-md border-blue-300 border-[1px] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />)
    }, {
        key: 'quantity',
        label: t('quantity'),
        width: 'w-[150px]',
        field: (index: number) => (
            <input
                placeholder={t('quantity') as string}
                {...register(`products[${index}].quantity`, { required: true, min: '1' })}
                type="number"
                onChange={(e: any) => {
                    updateTotalProduct(index, e.target.value as number);

                    setFocus(`products[${index}].total`);
                    setFocus(`products[${index}].quantity`);
                }}
                step="1"
                min="1"
                className="w-full mt-1 mb-1 p-2 dark:bg-gray-300 block rounded-md border-blue-300 border-[1px] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />)
    }, {
        key: 'total',
        label: t('total'),
        width: 'w-[300px]',
        field: (index: number) => (<input
            placeholder={t('total') as string}
            readOnly
            {...register(`products[${index}].total`, { required: true })}
            type="number"
            className="w-full mt-1 mb-1 p-2 dark:bg-gray-300 block rounded-md border-blue-300 border-[1px] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />)
    }], []);

    const callOnSubmit = (data: FormValues) => onSubmit(data, reset);

    const onDelete = (id: number) => {
        if (fields.length > 1) {
            remove(id);
        }
    }

    return (
        <div className="container mx-auto w-100 py-12">
            <h1 className="text-3xl font-medium my-5 dark:text-blue-300">{title}</h1>

            <form className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg" onSubmit={handleSubmit(callOnSubmit)}>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {column.label}
                                </th>
                            ))}
                            <th scope="col" className="p-4 text-xs font-medium text-gray-500 text-center">
                                <Link to="#" onClick={() => addField()}>
                                    <RiAddCircleFill size="20px" className="text-indigo-500" />
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-100">
                        {fields.map((field, index) => (
                            <tr key={field.id} className='border'>
                                {columns.map((column, indexCol) => (
                                    <td key={`${field.id}.${indexCol}`} className={`${column.width} p-4 whitespace-nowrap text-sm font-normal text-gray-900`}>
                                        {column.field(index, field)}
                                    </td>
                                ))}
                                <td className="w-[30px] p-4 text-sm font-normal text-gray-900 text-center">
                                    <Link to="#" onClick={() => onDelete(index)}>
                                        <RiDeleteBin2Fill size="20px" className="text-red-500" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <FootButtons routeBack={routes.list} isSubmitting={isSubmitting} isValid={isValid} label={labelSubmit} />
            </form>
        </div>
    )
}

export default OrderForm;