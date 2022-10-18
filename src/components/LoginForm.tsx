import React from 'react'
import { logIn } from '../redux/features/user/userSlice'
import { useAppDispatch } from '../redux/hooks'

export const LoginForm = () => {
    const dispatch = useAppDispatch()

    const usernameRef =
        React.useRef() as React.MutableRefObject<HTMLInputElement>
    const passwordRef =
        React.useRef() as React.MutableRefObject<HTMLInputElement>

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(
            logIn({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            }),
        )
    }

    return (
        <>
            <div className="my-auto p-4 w-full max-w-sm rounded-lg border  shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium  text-gray-300"
                        >
                            Username
                        </label>
                        <input
                            type="string"
                            name="username"
                            id="username"
                            ref={usernameRef}
                            className="  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                            placeholder="tesonet ;)"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium  text-gray-300"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            ref={passwordRef}
                            placeholder="••••••••"
                            className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                    >
                        Login to your account
                    </button>
                </form>
            </div>
        </>
    )
}
