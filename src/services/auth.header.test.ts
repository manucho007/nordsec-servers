import { authHeader } from './auth.header'

test('should return a bearer token if the user is in localstorage', () => {
    localStorage.setItem('user', JSON.stringify({ token: 'test-token' }))
    const token = authHeader()
    expect(token).toBe('Bearer test-token')
    localStorage.removeItem('user')
})

test('should return an empty token if the user is not in localstorage', () => {
    const token = authHeader()
    expect(token).toBe('')
})
