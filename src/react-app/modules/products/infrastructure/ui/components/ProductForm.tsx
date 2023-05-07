// modules/products/infrastructure/ui/components/ProductsForm.tsx

import { type FieldValues, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { RiLoaderFill } from 'react-icons/ri';
import Alert from '../../../../../app/components/Alert';
import Input from '../../../../../app/components/Input';
import routes, { Link } from "../utils/routes";

type FormValues = {
    name: string;
    reference: string;
    description: string;
    price: number;
    tax: number;
}

const ProductsForm = ({ onSubmit }: { onSubmit: Function }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        reset,
    } = useForm<FormValues>();

    const callOnSubmit = (data: FieldValues) => onSubmit(data, reset)

    return (
        <div className="container mx-auto max-w-md py-12">
            <h1 className="text-3xl font-medium my-5 dark:text-blue-300">Create a new Product</h1>

            {['name', 'reference', 'description', 'price', 'tax'].map((field: any) => (
                <ErrorMessage
                    key={field}
                    errors={errors}
                    name={field}
                    render={({ message }) => <Alert message={message} type="danger" />}
                />
            ))}

            <form className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg" onSubmit={handleSubmit(callOnSubmit)}>
                <Input name='name' title="Name" register={register} validations={{ required: true, maxLength: 30 }} />
                <Input name='reference' title="Reference" register={register} validations={{ required: true, maxLength: 30 }} />
                <Input name='description' title="Description" register={register} validations={{ required: true, maxLength: 100 }} />
                <Input name='price' title="Price" type="number" step="0.01" min="0.1" register={register} validations={{ required: true, min: '0.1' }} />
                <Input name='tax' title="Tax" type="number" step="0.01" min="0.1" register={register} validations={{ required: true, min: '0.1' }} />

                <div className='flex justify-center gap-4'>
                    <Link to={routes.list} className='my-4 capitalize bg-gray-500 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-600'>
                        Go back
                    </Link>

                    <button
                        disabled={isSubmitting || !isValid}
                        type="submit"
                        className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <RiLoaderFill size="20px" className="w-6 h-6 animate-spin mr-1" />

                                Creating...
                            </span>
                        ) : (
                            <span>Create Link</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProductsForm;