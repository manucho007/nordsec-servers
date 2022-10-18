import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

function App() {
    return (
        <>
            <div className="bg-gray-800">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default App
