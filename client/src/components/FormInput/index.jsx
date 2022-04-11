import React from 'react'
/* <input {...props} /> */

const FormInput = ({
    onChange,
    lable,
    placeholder,
    type,
    id,
    className,
    value,
}) => {
    return (
        <div className=" mt-4">
            <label className="block text-sm font-medium text-gray-700">
                {lable}
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <input
                    type={type}
                    id={id}
                    onChange={onChange}
                    className={
                        `relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ` +
                        className
                    }
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        </div>
    )
}

export default FormInput
