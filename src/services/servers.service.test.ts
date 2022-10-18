import { getServers } from './servers.service'

afterEach(() => {
    jest.restoreAllMocks()
})

test('should work', () => {
    expect(true).toBeTruthy()
})

describe('getServers', () => {
    const data = {
        servers: [
            {
                name: 'Lithuania #12',
                distance: 625,
            },
            {
                name: 'Latvia #96',
                distance: 1285,
            },
            {
                name: 'Germany #48',
                distance: 662,
            },
        ],
    }
    test('should make a GET request with the correct parameters and an Authentication token taken from localstorage and return a list of servers', async () => {
        // setup
        localStorage.setItem('token', JSON.stringify('test-token'))
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(data),
            }),
        ) as jest.Mock

        await expect(getServers()).resolves.toEqual(data)
        expect(global.fetch).toHaveBeenCalledWith('servers', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer test-token',
                'Content-Type': 'application/json',
            },
        })
    })

    // cleanup
    localStorage.removeItem('user')
})
