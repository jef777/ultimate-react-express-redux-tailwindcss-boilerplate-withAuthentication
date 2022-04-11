import React from 'react'

export default function ListItem({ post }) {
    return (
        <div className="relative bg-sky-100 p-4 drop-shadow-xl">
            <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {post.title}
                </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">{post.body}</dd>
        </div>
    )
}
