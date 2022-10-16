export const authHeader = () => {
    const token = JSON.parse(localStorage.getItem('token') as string)
    if (token) {
        console.log('TOKEN', token)

        return 'Bearer ' + token
    } else {
        return ''
    }
}
