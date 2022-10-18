export const login = async (username: string, password: string) => {
    const response = await fetch('tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    }).then()
    if (response.status !== 200) throw new Error()
    const responseToken = await response.json()
    if (responseToken.token) {
        localStorage.setItem('token', JSON.stringify(responseToken.token))
    }
    return responseToken
}

export const logout = () => {
    localStorage.removeItem('token')
}
