import React, { useEffect, useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import ErrorBanner from '../components/ErrorBanner'
import { Footer } from '../components/Footer'
import { Item } from '../components/Item'
import { Nav } from '../components/Nav'
import { Skeleton } from '../components/Skeleton'
import { SortingElements } from '../components/SortingElements'
import { Server } from '../models/Servers.models'
import {
    fetchServers,
    selectServers,
} from '../redux/features/servers/serversSlice'
import { selectUser } from '../redux/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

export type SortDirection = 'ascending' | 'descending'

export const Home = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)
    const { servers, loading, error } = useAppSelector(selectServers)

    const [sortConfig, setSortConfig] = useState(
        {} as { key: keyof Server; direction: SortDirection },
    )

    const sortedItems = useMemo(() => {
        const sortableItems = [...servers]
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return sortableItems
    }, [servers, sortConfig])

    const setNewConfig = (sortConfig: {
        key: keyof Server
        direction: SortDirection
    }) => {
        setSortConfig(sortConfig)
    }

    if (!user.token) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        dispatch(fetchServers())
    }, [])

    return (
        <>
            <Nav />

            {/* Skeleton while servers load */}
            {loading ? (
                <Skeleton />
            ) : error ? (
                <>
                    <div className="min-h-screen">
                        <ErrorBanner message="Something went wrong getting the servers, please try again later!" />
                    </div>
                </>
            ) : (
                <>
                    <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
                        We’re proud of our servers
                    </h1>

                    <div className="my-4 flex justify-end mr-4">
                        <SortingElements
                            sortConfig={sortConfig}
                            setNewConfig={sortConfig =>
                                setNewConfig(sortConfig)
                            }
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
                        {/* List of servers send as props */}

                        {sortedItems.map(server => (
                            <Item
                                key={server.name + server.distance}
                                server={server}
                            />
                        ))}
                    </div>
                </>
            )}

            <Footer />
        </>
    )
}

export default Home
