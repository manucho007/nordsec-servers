import { Server } from '../models/Servers.models'
import { authHeader } from './auth.header'

export const getServers = async (): Promise<Server[]> => {
    const response = await fetch('servers', {
        method: 'GET',
        headers: {
            Authorization: authHeader(),
            'Content-Type': 'application/json',
        },
    })
    const responseJson = await response.json()
    return responseJson
}
