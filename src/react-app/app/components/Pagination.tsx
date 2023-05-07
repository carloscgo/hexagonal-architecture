// app/components/Pagination.tsx

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useTranslation } from "../utils/i18n";
import { LIMIT, TYPES } from "../utils/constants";

type PropsPagination = {
    current: number;
    length: number;
    onPage: (page: number, type: string) => void;
}

export default function Pagination({ current, length, onPage }: PropsPagination) {
    const { t } = useTranslation();

    const onPagePrevious = () => current > 1 && onPage(current - 1, TYPES.previous);
    const onPageNext = () => length === LIMIT && onPage(current + 1, TYPES.next);

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between">
                <button
                    disabled={current === 1}
                    onClick={() => onPagePrevious()}
                    className="relative inline-flex bg-indigo-500 hover:bg-indigo-600 items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-white disabled:opacity-75 disabled:cursor-not-allowed"
                >
                    <RiArrowLeftSLine size="20px" />
                    {t('previous')}
                </button>
                <button
                    disabled={length < LIMIT}
                    onClick={() => onPageNext()}
                    className="relative inline-flex bg-indigo-500 hover:bg-indigo-600 items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-white disabled:opacity-75 disabled:cursor-not-allowed"
                >
                    <RiArrowRightSLine size="20px" />
                    {t('next')}
                </button>
            </div>
        </div>
    )
}
