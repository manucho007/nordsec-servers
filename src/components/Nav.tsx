import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { deleteToken } from '../redux/features/user/userSlice'
import { selectUser } from '../redux/features/user/userSlice'
import { useAppSelector } from '../redux/hooks'

export const Nav = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const authUser = useAppSelector(selectUser)

    const logoutHandler = () => {
        dispatch(deleteToken())
        navigate('/login')
    }
    return (
        <>
            <nav className=" px-2 sm:px-4 py-2.5 rounded bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a className="flex items-center">
                        <img
                            src="https://s1.nordcdn.com/nordvpn/media/1.1216.0/images/global/logos/square/nordlayer-badge-notext.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                            Howdy {authUser.username}
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="flex flex-col p-4 mt-4 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li>
                                <a
                                    className="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
