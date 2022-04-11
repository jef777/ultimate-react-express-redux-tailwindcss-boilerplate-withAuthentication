import React, { useState, useEffect } from 'react'
import { getToken } from '../../utils/HelperFunctions'
import FormInput from '../../components/FormInput'
import Button from '../../components/Button'
import { login } from '../../store/slices/auth/authThunk'
import { useSelector, useDispatch } from 'react-redux'
import history from '../../utils/history'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { token, loading } = useSelector((state) => state.auth)

    if (token || getToken()) {
        history.push('/dashboard')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    return (
        <div className="flex h-screen items-center justify-center overflow-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label className="sr-only">Email address</label>
                            <FormInput
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                type="email"
                                id="email-address"
                                lable="Email"
                                name="email"
                                autocomplete="email"
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                value={email}
                                required
                            />
                        </div>
                        <div>
                            <label className="sr-only">Password</label>
                            <FormInput
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                                lable="Password"
                                name="password"
                                autocomplete="current-password"
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                value={password}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                {' '}
                                Forgot your password?{' '}
                            </a>
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            name="Sign in"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
