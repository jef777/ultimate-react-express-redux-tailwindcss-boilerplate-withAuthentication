import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../pages/Loading'
import Login from '../pages/Login'

const PrivateRoute = ({ children, ...rest }) => {
    const { token, loading } = useSelector((state) => state.auth)

    if (loading) {
        return <Loading />
    }

    return <> {token ? children : <Login />} </>
}

export default PrivateRoute
