import { login } from './auth.service'

afterEach(() => {
    jest.restoreAllMocks()
})

test('should work', () => {
    expect(true).toBeTruthy()
})

describe('login', () => {
    const data = {
        token: 'Test-token',
    }
    test('should make a POST request with the correct parameters and return the token', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(data),
            }),
        ) as jest.Mock
        await expect(login('testmail', 'testpwd')).resolves.toEqual(data)
        expect(global.fetch).toHaveBeenCalledWith('tokens', {
            method: 'POST',
            body: JSON.stringify({
                username: 'testmail',
                password: 'testpwd',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    })
    test('should throw an error if there is a problem', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 201,
            }),
        ) as jest.Mock

        await expect(login('testmail', 'testpwd')).rejects.toThrow()
    })
})
