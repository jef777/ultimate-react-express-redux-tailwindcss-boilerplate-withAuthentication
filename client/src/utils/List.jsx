import React from 'react'
export default function List({ children }) {
    return (
        <dl className=" mt-12 space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {children}
        </dl>
    )
}
