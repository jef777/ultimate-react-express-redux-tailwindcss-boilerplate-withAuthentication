import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import NoMatch from '../pages/404'
import Home from '../pages/Home'
import PrivateRoute from './PrivateRoute'

import Posts from '../pages/Posts/posts'
import NavBar from '../components/Navigation/navBar'
import Dashboard from '../pages/Admin/dashboard'

const AppRoutes = () => (
    <>
        <NavBar />
        <Routes>
            <Route
                path="/login"
                caseSensitive={false}
                element={<Login />}
                exact
            />
            <Route path="/" caseSensitive={false} element={<Home />} />
            <Route path="/posts" caseSensitive={false} element={<Posts />} />
            <Route
                path="/dashboard"
                caseSensitive={false}
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
                replace
            />

            <Route path="*" caseSensitive={false} element={<NoMatch />} exact />
        </Routes>
    </>
)

export default AppRoutes
