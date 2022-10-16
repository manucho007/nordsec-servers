export const login = async (username: string, password: string) => {
    try {
        const response = await fetch('tokens', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        const responseToken = (await response.json()) as { token: string }
        if (responseToken.token) {
            localStorage.setItem('token', JSON.stringify(responseToken.token))
        }
        return responseToken
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export const logout = () => {
    localStorage.removeItem('token')
}
