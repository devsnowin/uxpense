import React from "react"
import {useRouter} from "next/router";
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"

import {initialize} from '../firebase/firebase'

const AuthContext = React.createContext({
    authUser: null,
    isLoading: false
})

export const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    const router = useRouter()
    const {firebaseAuth} = initialize()

    const authStateChanged = async (user) => {
        setIsLoading(true)
        if (!user) {
            setAuthUser(null)
            setIsLoading(false)
            return null
        }
        setAuthUser({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL
        })
        setIsLoading(false)
    }

    const logout = async () => {
        setIsLoading(true)
        await signOut(firebaseAuth)
        setIsLoading(false)
    }

    const login = async () => {
        setIsLoading(true)
        const googleAuthProvider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(firebaseAuth, googleAuthProvider);

        if (user) {
            await router.push('/home').then(() => setIsLoading(false))
            return null;
        }

        throw new Error('Trouble in login....')
    }

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, authStateChanged)
        return () => unsubscribe()
    }, [])

    const value = {authUser, isLoading, logout, login}
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)
