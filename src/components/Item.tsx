import React, { FunctionComponent } from 'react'
import { Server } from '../models/Servers.models'

export const Item: FunctionComponent<{ server: Server }> = ({ server }) => {
    const country = server.name.split(' #')[0].toLowerCase()
    return (
        <>
            <div className="mx-auto flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl  border-gray-700 bg-gray-800 hover:bg-gray-700">
                <img
                    className="object-cover w-full h-20 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                    src={`https://countryflagsapi.com/svg/${country}`}
                    alt={country}
                />
                <div className="flex flex-col justify-between p-4 leading-normal w-64 md:w-52">
                    <p className="mb-2 text-2xl font-bold tracking-tight  text-white">
                        {server.name}
                    </p>
                    <p className="mb-3 font-normal  text-gray-400">
                        Distance :{server.distance}
                    </p>
                </div>
            </div>
        </>
    )
}
