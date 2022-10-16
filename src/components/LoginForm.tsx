import React, { useState } from 'react'
import { storeToken } from '../redux/features/user/userSlice'
import { useAppDispatch } from '../redux/hooks'
import { login } from '../services/auth.service'

export const LoginForm = () => {
    const dispatch = useAppDispatch()

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

    return (
        <>
            <div className="my-auto p-4 w-full max-w-sm rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Username
                        </label>
                        <input
                            onChange={onChangeEmail}
                            type="username"
                            name="username"
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="tesonet ;)"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your password
                        </label>
                        <input
                            onChange={onChangePassword}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login to your account
                    </button>
                </form>
            </div>
        </>
    )
}
