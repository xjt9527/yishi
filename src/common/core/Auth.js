import Cookie from 'js-cookie'

const TOKEN_KEY = 'token'

class Auth {
    constructor() {

    }

    static getToken() {
        return Cookie.get(TOKEN_KEY)
    }

    static setToken(v) {
        return Cookie.set(TOKEN_KEY, v)
    }
}

export default Auth
