import { useEffect } from "react";
import { Notyf } from "notyf";
import StatusMutation from "../utils/statusUseQuery";
import { useTranslation } from "../utils/i18n";

const notyf = new Notyf({
    duration: 1000,
    dismissible: true,
    position: {
        x: "right",
        y: "top",
    },
});

const useToast = (status: string, message: string, success: string, error?: string) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (status !== StatusMutation.idle) {
            if (status === StatusMutation.loading) {
                notyf.open({ 
                    message,
                    type: 'custom', 
                    background: '#fff',
                    className: 'text-black'
                });
            }

            if (status === StatusMutation.success) {
                notyf.success(success);
            }

            if (status === StatusMutation.error) {
                notyf.error(`${t('somethingWentWrong')} - ${error}`);
            }
        }
    }, [status, error, success, message, t])
}

export default useToast;
