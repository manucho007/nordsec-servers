import { authHeader } from './auth.header'

test('should return a bearer token if the user is in localstorage', () => {
    localStorage.setItem('token', JSON.stringify('test-token'))
    const token = authHeader()
    expect(token).toBe('Bearer test-token')
    localStorage.removeItem('token')
})

test('should return an empty token if the user is not in localstorage', () => {
    localStorage.removeItem('token')
    const token = authHeader()

    expect(token).toBe('')
})
