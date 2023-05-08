// app/components/Input.tsx

import { ErrorMessage } from '@hookform/error-message';

type PropsInput = {
    register: (name: string, validations: object) => object;
    title?: string;
    name: string;
    type?: string;
    validations: object;
    errors: object;
    [key: string]: number | string | object | undefined;
}

export default function Input({ register, title, name, type, validations, errors, ...props }: PropsInput) {
    return (
        <>
            <label className="block w-100">
                {title && <span className="text-gray-700 dark:text-gray-300">{title}</span>}
                <input
                    placeholder={title}
                    {...register(name, validations)}
                    name={name}
                    type={type ?? 'text'}
                    {...props}
                    className="mt-1 mb-1 p-2 dark:bg-gray-300 block w-full rounded-md border-blue-300 border-[1px] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />

                <ErrorMessage
                    key={name}
                    errors={errors}
                    name={name}
                    render={({ message }) => (
                        <div className='bg-red-400 text-white rounded-md p-2 text-[0.8rem] w-full'>
                            {message}
                        </div>
                    )}
                />
            </label>
        </>
    )
}
