import { useEffect } from "react";
import StatusMutation from "../utils/statusUseQuery";
import { Notyf } from "notyf";

const notyf = new Notyf({
    duration: 1000,
    dismissible: true,
    position: {
        x: "right",
        y: "top",
    },

});

const useToast = (status: string, error?: string) => {
    useEffect(() => {
        if (status !== StatusMutation.idle) {
            if (status === StatusMutation.loading) {
                notyf.open({ 
                    type: 'custom', 
                    message: 'Creating new product...',
                    background: '#fff',
                    className: 'text-black'
                });
            }

            if (status === StatusMutation.success) {
                notyf.success('Product successfully created!');
            }

            if (status === StatusMutation.error) {
                notyf.error(`Something went wrong. Please try again - ${error}`);
            }
        }
    }, [status])
}

export default useToast;
