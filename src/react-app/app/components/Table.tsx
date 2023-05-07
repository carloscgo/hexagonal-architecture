// app/components/Table.tsx

import { Link } from "react-router-dom";
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import { useTranslation } from "../utils/i18n";
import Modal from "./Modal";
import { useState } from "react";
import { IdProduct } from "../../modules/products/domain/models/Product";

interface Values {
    [key: string]: any;
}

interface Column {
    key: string,
    label: string,
}

type PropsTable = {
    columns: Column[];
    values: Values[];
    routesEdit: string;
    keyId: string;
    actionDelete: (idProduct: IdProduct) => void;
}

export default function Table({ columns, values, routesEdit, keyId, actionDelete }: PropsTable) {
    const { t } = useTranslation();
    const [idProduct, setIdProduct] = useState<IdProduct>();
    const [showModal, setShowModal] = useState(false);

    const onDelete = (id: IdProduct) => {
        setIdProduct(id);
        setShowModal(true);
    }

    return (
        <>
            <Modal
                color="red"
                title={t('deleteProduct')}
                message={`${t('messageDeleteProduct')} ${t('messageWarningDelete')}`}
                labelButton={t('confirm')}
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={() => actionDelete(idProduct as IdProduct)}
            />

            <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg dark:bg-gray-200">
                    <div className="align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {columns.map((column, index) => (
                                            <th key={index} scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {column.label}
                                            </th>
                                        ))}
                                        <th scope="col" className="p-4 text-center text-xs font-medium w-[200px] text-gray-500 uppercase tracking-wider">
                                            {t('actions')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-100">
                                    {values.map((value, indexVal) => (
                                        <tr key={indexVal}>
                                            {columns.map((column, indexCol) => (
                                                <td key={`${indexVal}.${indexCol}`} className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                    {value[`${column.key}`]}
                                                </td>
                                            ))}
                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 flex gap-3 items-center justify-center">
                                                <Link to={routesEdit.replace(keyId, value.id)}>
                                                    <RiEdit2Fill size="20px" className="text-indigo-500" />
                                                </Link>

                                                <Link to="#" onClick={() => onDelete(value.id)}>
                                                    <RiDeleteBin2Fill size="20px" className="text-red-500" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}