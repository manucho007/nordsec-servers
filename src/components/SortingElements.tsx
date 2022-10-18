import React from 'react'
import { Server } from '../models/Servers.models'
import { SortDirection } from '../pages/Home'

export const SortingElements: React.FunctionComponent<{
    sortConfig: { key: keyof Server; direction: SortDirection }
    setNewConfig: (sortConfig: {
        key: keyof Server
        direction: SortDirection
    }) => void
}> = ({ sortConfig, setNewConfig }) => {
    const requestSort = (key: keyof Server) => {
        let direction: SortDirection = 'ascending'
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending'
        }
        setNewConfig({ key, direction })
    }
    return (
        <>
            <button
                type="button"
                onClick={() => requestSort('name')}
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
                Name
                {!sortConfig.direction ||
                sortConfig.direction === 'ascending' ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                    </svg>
                )}
            </button>
            <button
                type="button"
                onClick={() => requestSort('distance')}
                className="ml-4 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
                Distance
                {!sortConfig.direction ||
                sortConfig.direction === 'ascending' ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-4h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
                    </svg>
                )}
            </button>
        </>
    )
}
