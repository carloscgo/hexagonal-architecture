// app/components/Input.tsx

type PropsInput = {
    register: Function;
    title: string;
    name: string;
    type?: string;
    validations: object;
    [key: string]: any;
}

const Input = ({ register, title, name, type, validations, ...props }: PropsInput) => {
    return (
        <label className="block">
            <span className="text-gray-700 dark:text-gray-300">{title}</span>
            <input
                placeholder={title}
                {...register(name, validations)}
                name={name}
                type={type ?? 'text'}
                {...props}
                className="mt-1 p-2 dark:bg-gray-300 block w-full rounded-md border-blue-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
        </label>
    )
}

export default Input;