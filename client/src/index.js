import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import AppRoutes from './routes'
import store from './store'
import { fetchUserData } from './store/slices/auth/authThunk'
import { BrowserRouter as Router } from 'react-router-dom'
import { getToken } from './utils/HelperFunctions'
import history from './utils/history'
import './App.css'

if (getToken()) {
    store.dispatch(fetchUserData())
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <Router history={history}>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </Router>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
