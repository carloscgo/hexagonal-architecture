// app/components/FootButtons.tsx

import { Link } from "react-router-dom";
import { RiLoaderFill, RiCheckFill, RiArrowGoBackFill } from "react-icons/ri";
import { useTranslation } from "../utils/i18n";

type PropsButton = {
    routeBack: string;
    label: string;
    isSubmitting: boolean;
    isValid: boolean;
}

export default function FootButtons({ routeBack, label, isSubmitting, isValid }: PropsButton) {
    const { t } = useTranslation();

    const isDisabled = isSubmitting || !isValid;

    return (
        <div className='flex justify-center gap-4'>
            <Link to={routeBack} className='my-4 capitalize bg-gray-500 text-white font-medium p-2 rounded-md hover:bg-gray-600'>
                <span className="flex items-center justify-center">
                    <RiArrowGoBackFill size="20px" className="mr-1" />
                    {t('goBack')}
                </span>
            </Link>

            <button
                disabled={isDisabled}
                type={isDisabled ? "button" : "submit"}
                className="my-4 capitalize bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600 disabled:opacity-75 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center">
                        <RiLoaderFill size="20px" className="animate-spin mr-1" />
                        {t('creating')}
                    </span>
                ) : (
                    <span className="flex items-center justify-center">
                        <RiCheckFill size="20px" className="mr-1" />
                        {label}
                    </span>
                )}
            </button>
        </div>
    )
}