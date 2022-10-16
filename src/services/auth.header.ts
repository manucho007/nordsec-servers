export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user') as string)

    if (user && user.token) {
        return 'Bearer ' + user.token
    } else {
        return ''
    }
}
