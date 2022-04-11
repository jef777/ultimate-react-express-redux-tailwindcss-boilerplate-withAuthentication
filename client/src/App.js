import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navigation/navBar'
import Home from './pages/home'
import Posts from './pages/posts'

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" caseSensitive={false} element={<Home />} />
                    <Route
                        path="/posts"
                        caseSensitive={false}
                        element={<Posts />}
                    />
                </Routes>
            </Router>
        </>
    )
}

export default App
