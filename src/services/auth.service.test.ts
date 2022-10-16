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
    test('should return an error message if there is a problem', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(new Error('Something went wrong!')),
            }),
        ) as jest.Mock

        try {
            await login('testmail', 'testpwd')
        } catch (error) {
            expect(error).toBe('Something went wrong!')
        }
    })
})
