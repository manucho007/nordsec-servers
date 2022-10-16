import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { selectToken, storeToken } from '../redux/features/user/userSlice'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { login } from '../services/auth.service'

export const LoginForm = () => {
    const dispatch = useAppDispatch()
    const authUser = useAppSelector(selectToken)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value
        setEmail(email)
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value
        setPassword(password)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email && password) {
            const response = await login(email, password)
            dispatch(storeToken({ username: email, token: response.token }))
        } else {
            console.log('Complete the form bitte')
        }
    }

    if (authUser.token) {
        return <Navigate to="/" />
    }

    return (
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    type="string"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>
    )
}
