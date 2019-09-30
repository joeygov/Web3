import ROUTER from 'router'
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        this.user = user
    },
    register(userEmail, confirmedPassword) {
        this.registeredUser.push({
            user: userEmail,
            password: confirmedPassword
        })
        ROUTER.push("/Login");
    },
    login(userEmail, confirmedPassword) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].user === userEmail && this.registeredUser[i].password === confirmedPassword) {
                ROUTER.push('/Dashboard')
                return this.registeredUser[i]
            }

        }
        return null
    },

    logout() {
        this.user = null
        ROUTER.push('/Login')
    },
    update() {
        this.user = null
        ROUTER.push('/Update')
    },
    save() {
        this.user = null
        ROUTER.push('/PersonalInfo')
    }

}