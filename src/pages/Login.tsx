import React from 'react'
import { LoginForm } from '../components/LoginForm'

export default function Login() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Welcome Back
                </h1>
                <LoginForm />
            </div>
        </div>
    )
}
