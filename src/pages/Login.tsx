import React from 'react'
import { LoginForm } from '../components/LoginForm'
import { Navigate } from 'react-router-dom'
import { selectUser } from '../redux/features/user/userSlice'
import { useAppSelector } from '../redux/hooks'
import ErrorBanner from '../components/ErrorBanner'

export const Login = () => {
    const { token, error } = useAppSelector(selectUser)

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <>
            <div className="bg-gray-900 flex justify-center min-h-screen py-auto">
                {error && (
                    <div className="absolute mx-auto w-2/3 md:w-1/3 mt-16">
                        <ErrorBanner message={error} />
                    </div>
                )}
                <LoginForm />
            </div>
        </>
    )
}
