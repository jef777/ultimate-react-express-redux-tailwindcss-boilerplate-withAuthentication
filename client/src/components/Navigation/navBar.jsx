import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/slices/auth/authThunk'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="absolute top-0 z-10 w-full bg-white">
                <div className=" mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink className="active" to="/">
                                <span className="sr-only">Posts</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden space-x-10 md:flex">
                            <NavLink
                                to="/"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Home
                            </NavLink>
                        </nav>
                        <nav className="hidden space-x-10 md:flex">
                            <NavLink
                                to="/posts"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Posts
                            </NavLink>
                        </nav>
                        {token ? (
                            <nav className="hidden space-x-10 md:flex">
                                <NavLink
                                    to="/dashboard"
                                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Dashboard
                                </NavLink>
                            </nav>
                        ) : (
                            ''
                        )}
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            {token ? (
                                <button
                                    className="mt-4 mb-2 block w-24 transform rounded-2xl bg-indigo-600 py-2 font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 active:scale-110"
                                    onClick={() => dispatch(signOut())}
                                >
                                    Log out
                                </button>
                            ) : (
                                <NavLink
                                    className="mt-4 mb-2 block w-24 transform rounded-2xl bg-indigo-600 py-2 text-center font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 active:scale-110"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className={
                        open
                            ? 'absolute inset-x-0 top-0 origin-top-right scale-100 p-2 opacity-100 transition duration-200 ease-out md:hidden'
                            : 'absolute inset-x-0 top-0 origin-top-right scale-95 p-2 opacity-0 transition md:hidden'
                    }
                >
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flex-col">
                                <nav className="mt-8 grid justify-items-center">
                                    <NavLink
                                        to="/"
                                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                    >
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
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Home
                                        </span>
                                    </NavLink>
                                </nav>
                                <nav className="mt-8 grid justify-items-center">
                                    <NavLink
                                        to="/posts"
                                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                    >
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
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Posts
                                        </span>
                                    </NavLink>
                                </nav>
                                {token ? (
                                    <nav className="mt-8 grid justify-items-center">
                                        <NavLink
                                            to="/dashboard"
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
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
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                />
                                            </svg>
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                Dashboard
                                            </span>
                                        </NavLink>
                                    </nav>
                                ) : (
                                    ''
                                )}
                                <nav className="mt-8 grid justify-items-center">
                                    <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                                        {token ? (
                                            <button
                                                className="mt-4 mb-2 block w-24 transform rounded-2xl bg-indigo-600 py-2 font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 active:scale-110"
                                                onClick={() =>
                                                    dispatch(signOut())
                                                }
                                            >
                                                Log out
                                            </button>
                                        ) : (
                                            <NavLink
                                                className="mt-4 mb-2 block w-24 transform rounded-2xl bg-indigo-600 py-2 text-center font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 active:scale-110"
                                                to="/login"
                                            >
                                                Login
                                            </NavLink>
                                        )}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
