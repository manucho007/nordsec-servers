const API_URL = 'https://playground.tesonet.lt/v1/'

export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(API_URL + 'tokens', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        const responseToken = (await response.json()) as { token: string }
        if (responseToken.token) {
            localStorage.setItem('user', JSON.stringify(responseToken.token))
        }
        return responseToken
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const logout = () => {
    localStorage.removeItem('user')
}
